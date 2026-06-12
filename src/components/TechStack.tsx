import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

/**
 * Colophon — the closing page of the brief. The full stack set as dense
 * mono text in two columns, grouped by discipline. No chips, no grid.
 */
const stack: { label: string; items: string[] }[] = [
  {
    label: "AI / ML",
    items: [
      "Gemini 2.5 Flash",
      "Gemini 3.0 Pro",
      "Gemini 3.1",
      "Claude",
      "Vertex AI ADK",
      "Google Cloud STT",
      "HeyGen",
      "Veo 3.1",
      "YOLO (vision)",
      "MediaPipe",
    ],
  },
  {
    label: "Cloud",
    items: [
      "GCP",
      "serverless containers",
      "Cloud Scheduler",
      "Vertex AI",
      "Secret Manager",
      "Vercel",
      "Docker",
    ],
  },
  {
    label: "Data",
    items: [
      "graph database",
      "Domo Datasets",
      "Domo AppDB",
      "Domo Code Engine",
      "Domo Workflows",
      "Domo DataFlows",
      "BigQuery",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React 19",
      "Next.js 16",
      "Vite",
      "Tailwind CSS 4",
      "TypeScript",
      "Electron",
      "Remotion",
      "Framer Motion",
    ],
  },
  {
    label: "Backend",
    items: ["Python 3.12", "Flask", "FastAPI", "Node.js", "Express", "gevent"],
  },
  {
    label: "APIs & protocols",
    items: [
      "MCP (Model Context Protocol)",
      "REST",
      "WebSocket",
      "SocketIO",
      "LiveKit",
      "MSAL",
      "OAuth 2.0",
      "MIDI",
    ],
  },
  {
    label: "DevOps & tools",
    items: [
      "gcloud CLI",
      "GitHub Actions",
      "launchd",
      "Playwright",
      "Claude Code",
      "FFmpeg",
      "python-pptx",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="colophon" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-[1100px] py-24 md:py-32">
        <Reveal>
          <Eyebrow as="h2">Colophon</Eyebrow>
          <p className="measure-narrow mt-5 text-body text-ink-soft">
            The systems above were built with:
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="gap-x-16 md:columns-2">
            {stack.map((group) => (
              <div
                key={group.label}
                className="mb-8 break-inside-avoid border-t border-hairline pt-4"
              >
                <p className="eyebrow text-ink">{group.label}</p>
                <p className="mt-2 font-mono text-caption leading-relaxed text-ink-soft">
                  {group.items.join(", ")}
                </p>
              </div>
            ))}
          </div>

          <p className="border-t border-hairline pt-4 font-mono text-caption text-ink-soft">
            This brief is set in Newsreader, General Sans, and IBM Plex Mono.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
