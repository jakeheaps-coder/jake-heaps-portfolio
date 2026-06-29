/**
 * Feature flags.
 *
 * SHOW_VIDEOS — the talking-head videos aren't filmed yet. Reserved <VideoSlot>
 * mounts render nothing while this is false. When the footage exists, set the
 * `src` on each VideoSlot and flip this to true to enable every slot at once.
 */
export const SHOW_VIDEOS = false;
