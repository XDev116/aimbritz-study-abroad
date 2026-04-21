import { GrainOverlay } from "@/components/ui/grain-overlay";
import { BackgroundCurls } from "@/components/ui/background-curls";

/**
 * Global ivory canvas with animated curly-line backdrop + paper grain.
 * Wraps every route. Layers:
 *   z-0: body paper background
 *   z-1: animated curls + grain
 *   z-2: page content
 */
export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundCurls />
      <GrainOverlay />
      <div className="relative z-[2] flex flex-col min-h-screen">{children}</div>
    </>
  );
}
