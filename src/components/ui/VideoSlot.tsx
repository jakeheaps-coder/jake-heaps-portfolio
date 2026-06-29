import { SHOW_VIDEOS } from "../../lib/flags";
import { VideoBlock } from "./VideoBlock";

/**
 * A reserved video slot. Renders nothing until SHOW_VIDEOS is flipped on
 * (src/lib/flags.ts), then shows the VideoBlock (a placeholder until `src` is
 * set). Lets us keep slot placement in the page now, hidden, ready to enable.
 */
export function VideoSlot(props: {
  src?: string;
  poster?: string;
  caption: string;
  title: string;
  className?: string;
}) {
  if (!SHOW_VIDEOS) return null;
  return <VideoBlock {...props} />;
}
