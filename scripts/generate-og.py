"""Generate the 1200x630 og:image in the Manuscript brand. -> public/og.png"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / "scripts" / "fonts-print"

PAPER = (247, 244, 238)
INK = (26, 23, 20)
INK_SOFT = (95, 89, 79)
HAIRLINE = (226, 220, 207)
SIENNA = (138, 66, 38)

W, H = 1200, 630
M = 80  # margin

img = Image.new("RGB", (W, H), PAPER)
d = ImageDraw.Draw(img)


def newsreader(size: int, *, display: bool = True) -> ImageFont.FreeTypeFont:
    f = ImageFont.truetype(str(FONTS / "Newsreader-var.ttf"), size)
    try:
        f.set_variation_by_axes([72 if display else 16, 400])
    except OSError:
        pass
    return f


mono_12 = ImageFont.truetype(str(FONTS / "IBMPlexMono-Medium.ttf"), 22)
mono_sm = ImageFont.truetype(str(FONTS / "IBMPlexMono-Regular.ttf"), 20)

# Eyebrow
d.text((M, M), "JAKE HEAPS — AI STRATEGY & TRANSFORMATION", font=mono_12, fill=INK_SOFT)

# Hairline under eyebrow
d.line([(M, M + 48), (W - M, M + 48)], fill=HAIRLINE, width=2)

# Headline, two lines, Newsreader display
head = newsreader(72)
d.text((M, M + 92), "I build AI operating systems", font=head, fill=INK)
d.text((M, M + 92 + 84), "that people actually use.", font=head, fill=INK)

# The numeral
num = newsreader(150)
d.text((M, H - M - 200), "93%", font=num, fill=SIENNA)

# Caption beside the numeral baseline
bbox = d.textbbox((M, H - M - 200), "93%", font=num)
d.text(
    (bbox[2] + 36, H - M - 64),
    "TEAM ADOPTION · 26 PRODUCTION SYSTEMS · $2.3M FIRST-YEAR P&L",
    font=mono_sm,
    fill=INK_SOFT,
)

img.save(ROOT / "public" / "og.png", optimize=True)
print("Wrote public/og.png")
