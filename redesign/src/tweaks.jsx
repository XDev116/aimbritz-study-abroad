const { useEffect: useETw, useState: useSTw } = React;

function Tweaks() {
  const [open, setOpen] = useSTw(false);
  const [active, setActive] = useSTw(false);
  const [tw, setTw] = useSTw(() => ({ ...(window.__TWEAKS || {}) }));

  useETw(() => {
    const onMsg = (e) => {
      if (e.data?.type === "__activate_edit_mode") setActive(true);
      if (e.data?.type === "__deactivate_edit_mode") setActive(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const update = (k, v) => {
    const next = { ...tw, [k]: v };
    setTw(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
    if (k === "palette") document.body.setAttribute("data-theme", v);
    if (k === "showGrain") document.body.classList.toggle("grain", v);
  };

  if (!active) return null;
  return (
    <div className="fixed bottom-5 right-5 z-[70] font-mono text-[11px]" style={{ color: "var(--ink)" }}>
      {!open ? (
        <button onClick={() => setOpen(true)} className="rounded-full px-4 py-3 shadow-paper" style={{ background: "var(--ink)", color: "var(--paper)" }}>
          TWEAKS ◦
        </button>
      ) : (
        <div className="w-[280px] p-5 rounded-2xl shadow-paper" style={{ background: "var(--paper-3)", border: "1px solid var(--hairline)" }}>
          <div className="flex items-center justify-between mb-4">
            <span className="t-eyebrow">Tweaks</span>
            <button onClick={() => setOpen(false)} className="text-lg leading-none">×</button>
          </div>
          <div className="space-y-5">
            <div>
              <div className="t-eyebrow mb-2 text-ink-3">Palette</div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  ["ember", "#7BC314", "#F8F4EB"],
                  ["warm",  "#C46A28", "#F4EEE2"],
                  ["olive", "#5A6B2A", "#F8F4EB"],
                  ["bluebook", "#1A3A7A", "#F5F1E6"],
                ].map(([k, a, p]) => (
                  <button key={k} onClick={() => update("palette", k)} className="aspect-square rounded-md relative" style={{ background: p, border: tw.palette === k ? "2px solid var(--ink)" : "1px solid var(--hairline)" }}>
                    <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full" style={{ background: a }} />
                  </button>
                ))}
              </div>
            </div>
            <label className="flex items-center justify-between">
              <span>Paper grain</span>
              <input type="checkbox" checked={!!tw.showGrain} onChange={(e) => update("showGrain", e.target.checked)} />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
window.Tweaks = Tweaks;
