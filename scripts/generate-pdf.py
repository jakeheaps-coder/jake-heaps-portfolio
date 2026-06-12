"""The Manuscript Brief — print-native PDF edition.

Rebuilds Jake Heaps' portfolio as a typeset editorial document: Nightfall
cover and chapter dividers, a stat ledger, Tufte tables, six case files with
plates, a catalog index, and the closing letter — rendered with WeasyPrint.

Single source of truth for data is scripts/data.json (exported from
src/data/*.ts). Flagship briefing copy is transcribed from src/data/flagships.ts;
stacks are re-joined from data.json so the tech lists stay single-sourced.

Usage:
    source .venv/bin/activate && python scripts/generate-pdf.py

Outputs:
    jake-heaps-portfolio.pdf            (repo root)
    public/jake-heaps-portfolio.pdf     (deploy-shipped copy)
    scripts/portfolio-rendered.html     (intermediate, for debugging)
"""

from __future__ import annotations

import base64
import io
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

from jinja2 import Environment, StrictUndefined
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SCRIPTS = ROOT / "scripts"
FONT_DIR = SCRIPTS / "fonts-print"
LOGOS_DIR = ROOT / "public" / "logos"
SHOTS_DIR = ROOT / "public" / "screenshots"
ASSETS_DIR = ROOT / "src" / "assets"

TEMPLATE_PATH = SCRIPTS / "pdf-template.html"
RENDERED_HTML = SCRIPTS / "portfolio-rendered.html"
OUTPUT_PDF = ROOT / "jake-heaps-portfolio.pdf"
PUBLIC_PDF = ROOT / "public" / "jake-heaps-portfolio.pdf"

SITE_URL = "jakeheaps-coder.github.io/jake-heaps-portfolio"

# ---------------------------------------------------------------------------
# Confidentiality — the rendered HTML must never contain these terms.
# Mirrors scripts/check-confidentiality.sh.
# ---------------------------------------------------------------------------
FORBIDDEN_TERMS = [
    "$45", "$832", "$13M", "$6M", "28-person", "26 of 28",
    "32 respondents", "26 respondents", "Aprimo", "Salesloft", "ZoomInfo",
    "Neo4j", "Cloud Run", "board of directors", "Finance review",
    "backfill", "attrition", "headcount reduction",
    "Minky", "Clanker", "NLC Mutual", "awardco", "BankSouth",
    "10 people", "replaced 10", "people replaced",
]

# ---------------------------------------------------------------------------
# Fonts — pin static instances from the variable masters (WeasyPrint cannot
# drive variable-font axes). Idempotent: only instanced when missing.
# ---------------------------------------------------------------------------
FONT_INSTANCES = [
    # (source variable font, axis args, output name)
    ("Newsreader-var.ttf", ["opsz=72", "wght=400"], "Newsreader-Display.ttf"),
    ("Newsreader-var.ttf", ["opsz=72", "wght=500"], "Newsreader-DisplayMedium.ttf"),
    ("Newsreader-var.ttf", ["opsz=16", "wght=400"], "Newsreader-Text.ttf"),
    ("Newsreader-Italic-var.ttf", ["opsz=16", "wght=400"], "Newsreader-TextItalic.ttf"),
    ("Newsreader-Italic-var.ttf", ["opsz=72", "wght=400"], "Newsreader-DisplayItalic.ttf"),
]


def ensure_fonts() -> None:
    for src, axes, out in FONT_INSTANCES:
        out_path = FONT_DIR / out
        if out_path.exists():
            continue
        print(f"  instancing {out} …")
        subprocess.run(
            [sys.executable, "-m", "fontTools.varLib.instancer",
             str(FONT_DIR / src), *axes, "-o", str(out_path)],
            check=True, capture_output=True,
        )


# ---------------------------------------------------------------------------
# Asset helpers — everything embeds as a base64 data URI so the PDF build is
# self-contained.
# ---------------------------------------------------------------------------

def data_uri(data: bytes, mime: str) -> str:
    return f"data:{mime};base64,{base64.b64encode(data).decode()}"


def file_uri(path: Path, mime: str | None = None) -> str:
    if mime is None:
        mime = {
            ".svg": "image/svg+xml", ".png": "image/png",
            ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
        }[path.suffix.lower()]
    return data_uri(path.read_bytes(), mime)


LOGO_GRAY = "#6e6961"  # warm gray — the print stand-in for 65% grayscale


def grayscale_svg(path: Path) -> str:
    """Recolor an SVG's fills to the strip gray (white/none knockouts kept)."""
    text = path.read_text()

    def _swap(match: re.Match) -> str:
        color = match.group(2).strip().lower()
        if color in ("#fff", "#ffffff", "white", "none", "transparent"):
            return match.group(0)
        return f"{match.group(1)}{LOGO_GRAY}{match.group(3)}"

    # fill="…" attributes and fill: … declarations inside <style> blocks
    text = re.sub(r'(fill=")([^"]+)(")', _swap, text)
    text = re.sub(r"(fill:\s*)([^;}\"]+)([;}])", _swap, text)
    # Paths with no fill default to black — set the inherited fill on the root.
    if 'fill="' not in text.split(">", 1)[0]:
        text = text.replace("<svg", f'<svg fill="{LOGO_GRAY}"', 1)
    return data_uri(text.encode(), "image/svg+xml")


def grayscale_raster(path: Path, fade: float = 0.72) -> str:
    """Trim padding, composite over white, grayscale, lift toward strip gray."""
    img = Image.open(path).convert("RGBA")
    white = Image.new("RGBA", img.size, (255, 255, 255, 255))
    flat = Image.alpha_composite(white, img).convert("L")
    # Trim white/transparent padding so CSS heights size the mark itself.
    bbox = flat.point(lambda v: 0 if v > 245 else 255).getbbox()
    if bbox:
        flat = flat.crop(bbox)
    # Lift black toward ~30% so the strip sits quiet, like the site's 65%.
    flat = flat.point(lambda v: int(255 - (255 - v) * fade))
    buf = io.BytesIO()
    flat.convert("RGB").save(buf, "PNG", optimize=True)
    return data_uri(buf.getvalue(), "image/png")


def logo_uri(filename: str, fade: float = 0.72) -> str:
    path = LOGOS_DIR / filename
    if path.suffix.lower() == ".svg":
        return grayscale_svg(path)
    return grayscale_raster(path, fade)


def plate_uri(filename: str, crop: tuple[int, int, int, int] | None = None,
              max_width: int = 1400) -> str:
    """Crop a screenshot to its plate window and embed as PNG."""
    img = Image.open(SHOTS_DIR / filename).convert("RGB")
    if crop:
        img = img.crop(crop)
    if img.width > max_width:
        ratio = max_width / img.width
        img = img.resize((max_width, round(img.height * ratio)), Image.LANCZOS)
    buf = io.BytesIO()
    img.save(buf, "PNG", optimize=True)
    return data_uri(buf.getvalue(), "image/png")


# ---------------------------------------------------------------------------
# Editorial content
# ---------------------------------------------------------------------------

# Client logo strip — order from src/components/ClientLogos.tsx; per-logo
# heights (mm) tuned so the marks sit on a common optical size.
CLIENTS = [
    {"name": "Domo", "file": "domo.svg", "h": 7.5},
    {"name": "Bissell", "file": "bissell.svg", "h": 7.5},
    {"name": "Manscaped", "file": "manscaped.svg", "h": 4.6},
    {"name": "Cox Automotive", "file": "cox-automotive.webp", "h": 8.0},
    {"name": "Thryv", "file": "thryv.png", "h": 6.5},
    {"name": "Carvana", "file": "carvana.png", "h": 6.0},
    {"name": "Roku", "file": "roku.png", "h": 6.5},
    {"name": "Foot Locker", "file": "foot-locker.png", "h": 9.5},
    {"name": "One Health Solutions", "file": "one-health-solutions.png", "h": 7.0,
     "fade": 0.85},
]

# The three-ingredient formula — src/components/DomoStory/Strategy.tsx.
FORMULA = [
    {"n": "01", "title": "Mindset",
     "desc": "Shift the story from “AI will replace me” to “AI makes me "
             "dangerous.” Without this, nothing else matters."},
    {"n": "02", "title": "Enablement",
     "desc": "One-on-one coaching rather than training — sit with each person "
             "and build their specific workflow together. This is the hard part."},
    {"n": "03", "title": "Tools",
     "desc": "Role-specific AI tools that solve real problems. Tools come "
             "last; without the first two ingredients they become shelfware."},
]

# The standards ledger — src/components/DomoStory/Governance.tsx. Every
# check in the review system traces to a published framework.
STANDARDS = [
    {"framework": "OWASP Top 10 2021",
     "scope": "Web application security", "checks": "43"},
    {"framework": "OWASP LLM Top 10",
     "scope": "Prompt injection, output handling, excessive agency",
     "checks": "10"},
    {"framework": "OWASP Agentic Top 10",
     "scope": "Tool misuse, memory poisoning, cascading failures",
     "checks": "10"},
    {"framework": "OWASP MCP Top 10",
     "scope": "Token hygiene, tool poisoning, shadow servers", "checks": "10"},
    {"framework": "SOC 2 CC6–CC9",
     "scope": "Access, operations, change management, risk mitigation",
     "checks": "14"},
    {"framework": "CIS Controls v8",
     "scope": "Enterprise security baselines", "checks": "13"},
    {"framework": "NIST SP 800-53",
     "scope": "Selected controls from the catalog", "checks": "12"},
    {"framework": "GDPR / CCPA",
     "scope": "Privacy obligations — applied when PII is present",
     "checks": "8"},
]

# The first-year value ledger — transcribed from src/data/ledger.ts. Rows,
# totals, attestation, and counting rules; vendor names withheld there too.
LEDGER_ROWS = [
    {"item": "Team capacity created — workload absorbed by AI systems "
             "without additional hiring",
     "cls": "Capacity", "basis": "Yearly", "amount": "$1,500,000"},
    {"item": "Enterprise DAM platform license",
     "cls": "Displaced", "basis": "Yearly", "amount": "$85,000"},
    {"item": "Employee recognition platform license",
     "cls": "Displaced", "basis": "Yearly", "amount": "$25,000"},
    {"item": "AI meeting-intelligence platform",
     "cls": "Equivalent", "basis": "Yearly", "amount": "$240,000"},
    {"item": "Messaging intelligence system",
     "cls": "Equivalent", "basis": "Yearly", "amount": "$65,000"},
    {"item": "Marketing agent bundle",
     "cls": "Equivalent", "basis": "One-time", "amount": "$20,000"},
    {"item": "Competitive intelligence service",
     "cls": "Avoided", "basis": "Yearly", "amount": "$80,000"},
    {"item": "Keynote & launch content production",
     "cls": "Avoided", "basis": "One-time", "amount": "$50,000"},
    {"item": "Enterprise customer deal, AI-attributed",
     "cls": "Revenue", "basis": "One-time", "amount": "$275,000"},
]

LEDGER_TOTALS = [
    {"item": "Recurring annual run-rate", "cls": "", "basis": "Yearly",
     "amount": "$1,995,000", "grand": False},
    {"item": "One-time value", "cls": "", "basis": "One-time",
     "amount": "$70,000", "grand": False},
    {"item": "Closed revenue, AI-attributed", "cls": "Revenue",
     "basis": "One-time", "amount": "$275,000", "grand": False},
    {"item": "First-year total", "cls": "", "basis": "",
     "amount": "$2,340,000", "grand": True},
]

LEDGER_ATTESTATION = {
    "quote": "Right around 280 hours each week are being saved using AI "
             "across the marketing team.",
    "source": "FY26 Q3 quarterly business review",
}

LEDGER_COUNTING_RULES = [
    "Yearly amounts are annual run-rate as of fiscal year end; one-time "
    "amounts are counted once.",
    "Displaced — a paid license canceled. Equivalent — a system built "
    "in-house instead of buying. Avoided — external spend not incurred. "
    "Capacity — measured hours returned, valued at fully-loaded cost of "
    "equivalent roles.",
    "AI-attributed pipeline (seven figures, CRM-tracked) is excluded from "
    "every total above.",
]

# On the record — src/components/ExternalValidation.tsx.
REFERENCES = [
    {
        "n": "Ref 01", "kind": "Press",
        "title": "Bissell’s AI workflows, built in two days",
        "context": "TechRepublic’s national coverage of the two-day Bissell "
                   "build — the engagement I delivered. Attribution available "
                   "on a reference call.",
        "href": "https://www.techrepublic.com/article/news-bissell-ai-workflows-two-day-build-domo/",
        "display_url": "techrepublic.com/article/news-bissell-ai-workflows-two-day-build-domo",
    },
    {
        "n": "Ref 02", "kind": "Keynote",
        "title": "Google Cloud partner keynote, Domopalooza",
        "context": "Jim Fairweather, Head of AI GTM at Google Cloud, presented "
                   "the agent animations I produced — the keynote is public; "
                   "my authorship is attested on request.",
        "href": "https://www.domo.com/domopalooza/resources/partner-keynote-from-jim-fairweather-head-of-ai-gtm-google-cloud",
        "display_url": "domo.com/domopalooza/resources/partner-keynote-from-jim-fairweather",
    },
    {
        "n": "Ref 03", "kind": "Keynote",
        "title": "CEO keynote — AI transformation showcase",
        "context": "Every graphic in the keynote was AI-generated — produced "
                   "by my pipeline; 100+ slides, no design agency.",
        "href": "https://youtu.be/7HvOlSnfubQ",
        "display_url": "youtu.be/7HvOlSnfubQ",
    },
]

# Six case files — briefing copy transcribed from src/data/flagships.ts.
# Stacks are looked up in data.json by source name; figures carry their
# plate crop windows (left, top, right, bottom in source pixels).
FLAGSHIPS = [
    {
        "source": "DAM Platform (Vendor Replacement)",
        "file": "File 01", "kind": "Vendor displacement",
        "title": "The enterprise DAM displacement",
        "body": "I replaced the marketing org’s enterprise DAM platform with a "
                "Domo-native system built on infrastructure the company already "
                "pays for. Browse, search, collections, permissions — the full "
                "asset-management surface, rebuilt in-house. The migration moved "
                "more than 35,000 documents with zero mismatches. Underneath, "
                "87 Code Engine functions carry the workflow logic, and a complete "
                "ACL layer reproduces the access model the vendor charged for. "
                "The displacement was run like a procurement exit: access parity "
                "proven, data egress verified, contract wound down on schedule.",
        "roi": "Mid-five-figure annual license displaced",
        "spec": [
            {"label": "Documents migrated", "value": "35,000+"},
            {"label": "Migration mismatches", "value": "0"},
            {"label": "Code Engine functions", "value": "87"},
        ],
        "controls": "Full ACL parity with the displaced platform; "
                    "security-reviewed before cutover; zero-mismatch migration "
                    "audit.",
        "owner": "Marketing ops — documented runbook; maintained without me "
                 "since May 2026.",
        "figure": {
            # 16:9 top window — mirrors the site's aspect-[16/9] object-top.
            "src": "asset-library.png", "crop": (0, 0, 1280, 720), "w": 112,
            "fig": "Fig. 01",
            "alt": "The Domo-native DAM in production — asset browser with "
                   "filter rail and document grid.",
            "caption": "Asset browser in production: filters, collections, and "
                       "the migrated library.",
        },
    },
    {
        "source": "AI Outbound Engine",
        "file": "File 02", "kind": "Sales & revenue",
        "title": "The AI outbound engine",
        "body": "A fully automated outbound pipeline, run as one system rather "
                "than a stack of disconnected tools. Five stages — discover, "
                "enrich, sequence, agent feedback, converted prospect — each hand "
                "a cleaner record to the next. The data platform supplies "
                "targeting and enrichment, Apollo carries the sequences, and the "
                "agent feedback stage closes the loop. The architecture below is "
                "the system as built.",
        "roi": "In production — five-stage pipeline",
        "roi_label": "Status",
        "spec": [
            {"label": "Pipeline stages", "value": "5"},
            {"label": "Systems orchestrated", "value": "4"},
        ],
        "controls": "Human approval gates before any send; suppression lists "
                    "honored at every stage.",
        "owner": "Revenue marketing.",
        "figure": {
            "src": "outbound-engine.png", "crop": (55, 25, 1545, 1115), "w": 112,
            "fig": "Fig. 02",
            "alt": "Architecture diagram of the AI outbound engine pipeline.",
            "caption": "Pipeline architecture, first signal through converted "
                       "prospect.",
        },
    },
    {
        "source": "CMO Marketing Intelligence",
        "file": "File 03", "kind": "Enterprise AI agents",
        "title": "Marketing intelligence for the CMO",
        "body": "An executive reasoning engine built for the CMO: attribution, "
                "funnel analysis, and ROI modeling over the marketing data "
                "estate. Questions that once waited in an analyst queue come back "
                "in minutes. Twenty tools sit behind the conversation, and every "
                "release runs a 110-question test suite before it ships — the "
                "current pass rate is 100%.",
        "roi": "Consolidates 2–3 analyst functions; decision speed from days to minutes",
        "spec": [
            {"label": "Tools", "value": "20"},
            {"label": "Test suite", "value": "110 questions"},
            {"label": "Regression suite", "value": "110 Q"},
        ],
        "controls": "110-question eval suite gates every deploy; read-only "
                    "data access.",
        "owner": "Marketing analytics.",
        "figure": None,
    },
    {
        "source": "Knowledge Graph + Figma Plugin",
        "file": "File 04", "kind": "Knowledge & infrastructure",
        "title": "The knowledge graph platform",
        "body": "The substrate beneath the agent fleet. A graph database holds "
                "product messaging, competitive intelligence, and industry data "
                "as connected knowledge rather than scattered documents, and a "
                "55-tool API serves it to every agent in production. A custom "
                "Figma plugin puts the same source of truth inside the design "
                "canvas, so designers pull approved messaging instead of "
                "paraphrasing it.",
        "roi": "$65K/yr license equivalent",
        "spec": [
            {"label": "API tools", "value": "55"},
            {"label": "Knowledge domains", "value": "3"},
            {"label": "Surfaces", "value": "API · Figma"},
        ],
        "controls": "OAuth-gated API; read-only by design; allowlisted tools.",
        "owner": "Marketing ops.",
        "figure": None,
    },
    {
        "source": "Employee Recognition Platform",
        "file": "File 05", "kind": "Vendor displacement",
        "title": "The employee recognition platform",
        "body": "A second displacement, this one for HR: a Domo-native employee "
                "recognition and rewards platform covering nomination approvals, "
                "spot-bonus routing, anniversary tiers, and budget management. It "
                "administers 125 live budgets in production, and its 34-test "
                "suite passes clean on every release. Compensation-adjacent "
                "routing shipped under finance’s approval rules from day one.",
        "roi": "Five-figure annual license displaced",
        "spec": [
            {"label": "Live budgets", "value": "125"},
            {"label": "Tests passing", "value": "34/34"},
        ],
        "controls": "Spot-bonus routing under finance approval rules; access "
                    "scoped by role.",
        "owner": "HR program owner + marketing ops.",
        "figure": {
            # 16:9 top window — mirrors the site's aspect-[16/9] object-top.
            "src": "recognition-feed.png", "crop": (0, 0, 1186, 667), "w": 112,
            "fig": "Fig. 03",
            "alt": "The employee recognition platform in production — "
                   "recognition feed, milestones, and rewards.",
            "caption": "Recognition feed, milestones, and rewards in the live app.",
        },
    },
    {
        "source": "Paid Search Agent",
        "file": "File 06", "kind": "Enterprise AI agents",
        "title": "The paid search agent",
        "body": "A paid media analyst that never leaves the account. The agent "
                "reads Google Ads performance across six regional datasets, "
                "generates keywords and ad copy, and runs competitor analysis on "
                "demand — 24 tools in one conversational surface. The work it "
                "absorbs is the work a dedicated analyst would otherwise be "
                "hired to do.",
        "roi": "Equivalent to a dedicated paid media analyst ($80–120K/yr)",
        "spec": [
            {"label": "Tools", "value": "24"},
            {"label": "Regional datasets", "value": "6"},
        ],
        "controls": "Recommend-only — no autonomous spend changes; human "
                    "approval on every action.",
        "owner": "Paid media team.",
        "figure": None,
    },
]


def index_gloss(text: str) -> str:
    """First clause of a description, lowercased — same rule as the site."""
    cut = text.find(". ")
    clause = (text if cut == -1 else text[:cut]).rstrip(".")
    if re.match(r"^[A-Z][a-z]", clause):
        clause = clause[0].lower() + clause[1:]
    return clause


def chunk(seq: list, size: int) -> list[list]:
    return [seq[i:i + size] for i in range(0, len(seq), size)]


# ---------------------------------------------------------------------------
# Build
# ---------------------------------------------------------------------------

def build_context() -> dict:
    data = json.loads((SCRIPTS / "data.json").read_text())
    metrics = data["metrics"]
    proj = data["projects"]
    roster = data["roster"]["teamRoster"]

    # Flagship stacks come from data.json — single source of truth.
    by_name = {p["name"]: p for p in proj["projects"]}
    flagships = []
    for f in FLAGSHIPS:
        entry = dict(f)
        entry.setdefault("roi_label", "Return")
        entry["stack"] = by_name[f["source"]]["tech"]
        if f["figure"]:
            fig = dict(f["figure"])
            fig["uri"] = plate_uri(fig["src"], fig["crop"])
            entry["figure"] = fig
        flagships.append(entry)

    # Catalog index — three tiers, mirroring src/components/ProjectPortfolio.tsx:
    # production systems by category, then artifacts flat, then personal.
    flagship_names = {f["source"] for f in FLAGSHIPS}

    def index_line(p: dict) -> dict:
        return {"name": p["name"], "gloss": index_gloss(p["description"]),
                "roi": p["roi"]}

    system_catalog = []
    for cat, label in proj["categoryLabels"].items():
        if cat == "personal":
            continue
        entries = [
            index_line(p) for p in proj["projects"]
            if p["category"] == cat and p["kind"] == "system"
            and p["name"] not in flagship_names
        ]
        if entries:
            system_catalog.append({"label": label, "entries": entries})
    artifacts = [index_line(p) for p in proj["projects"]
                 if p["kind"] == "artifact" and p["category"] != "personal"]
    personal = [index_line(p) for p in proj["projects"]
                if p["category"] == "personal"]
    catalog_count = (sum(len(g["entries"]) for g in system_catalog)
                     + len(artifacts) + len(personal))

    # Roster grouped by department, in source order. Never a total count.
    departments: list[dict] = []
    for m in roster:
        dept = next((d for d in departments if d["name"] == m["department"]), None)
        if dept is None:
            dept = {"name": m["department"], "members": []}
            departments.append(dept)
        dept["members"].append(m)

    # Task ledger bars — the after bar is the conservative remainder; where a
    # range was reported ("85–92%") the bar takes the lower bound, as on site.
    tasks = []
    for t in metrics["taskImprovements"]:
        lower = int(re.match(r"\d+", t["reduction"]).group())
        tasks.append({**t, "after_share": 100 - lower})

    # Timeline — six phases as two rows of three.
    phases = [
        {**ph, "n": f"{i + 1:02d}"}
        for i, ph in enumerate(metrics["timelinePhases"])
    ]

    logos = [{**c, "uri": logo_uri(c["file"], c.get("fade", 0.72))}
             for c in CLIENTS]

    # Normalize the record numerals — prefix/suffix default to empty;
    # values get US thousands separators ("1,000").
    record = [
        {"value": f"{m['value']:,}", "prefix": m.get("prefix", ""),
         "suffix": m.get("suffix", ""), "label": m["label"]}
        for m in metrics["record"]
    ]

    return {
        "font_dir": FONT_DIR.as_uri(),
        "site_url": SITE_URL,
        "record": record,
        "system_count": proj["systemCount"],
        "decision_log": metrics["decisionLog"],
        "failures": metrics["failures"],
        "task_improvements": tasks,
        "results": metrics["transformationResults"],
        "timeline_rows": chunk(phases, 3),
        "formula": FORMULA,
        "standards": STANDARDS,
        "ledger_rows": LEDGER_ROWS,
        "ledger_totals": LEDGER_TOTALS,
        "attestation": LEDGER_ATTESTATION,
        "counting_rules": LEDGER_COUNTING_RULES,
        "departments": departments,
        "flagships": flagships,
        "system_catalog": system_catalog,
        "artifact_catalog": artifacts,
        "personal_catalog": personal,
        "catalog_count": catalog_count,
        "references": REFERENCES,
        "logo_rows": chunk(logos, 5),
        "headshot_uri": file_uri(ASSETS_DIR / "jake-headshot.jpeg"),
        "signature_uri": file_uri(ASSETS_DIR / "signature.svg"),
    }


def check_confidentiality(html: str) -> None:
    lowered = html.lower()
    hits = [t for t in FORBIDDEN_TERMS if t.lower() in lowered]
    if hits:
        raise SystemExit(f"CONFIDENTIALITY VIOLATION in rendered HTML: {hits}")


def main() -> None:
    print("1/4  Pinning static font instances …")
    ensure_fonts()

    print("2/4  Rendering HTML …")
    env = Environment(undefined=StrictUndefined, autoescape=False)
    template = env.from_string(TEMPLATE_PATH.read_text())
    html = template.render(**build_context())
    check_confidentiality(html)
    RENDERED_HTML.write_text(html)
    print(f"     {RENDERED_HTML.relative_to(ROOT)}")

    print("3/4  Typesetting PDF (WeasyPrint) …")
    from weasyprint import HTML  # late import — slow
    from weasyprint.text.fonts import FontConfiguration

    font_config = FontConfiguration()
    doc = HTML(string=html, base_url=str(ROOT)).render(font_config=font_config)
    doc.write_pdf(str(OUTPUT_PDF))

    print("4/4  Copying deploy artifact …")
    shutil.copyfile(OUTPUT_PDF, PUBLIC_PDF)

    pages = len(doc.pages)
    size_kb = OUTPUT_PDF.stat().st_size / 1024
    print(f"\nDone — {pages} pages, {size_kb:,.0f} KB")
    print(f"  {OUTPUT_PDF}")
    print(f"  {PUBLIC_PDF}")


if __name__ == "__main__":
    main()
