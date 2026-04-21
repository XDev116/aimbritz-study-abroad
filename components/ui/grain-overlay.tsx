/**
 * Fixed, full-viewport noise overlay. Renders once per layout.
 * Uses a tiled SVG noise texture at 4% opacity with multiply blend to give
 * every section the printed-paper feel that anchors the light identity.
 */
export function GrainOverlay() {
  return <div aria-hidden className="grain-overlay" />;
}
