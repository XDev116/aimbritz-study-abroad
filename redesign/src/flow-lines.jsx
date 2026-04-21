const { useEffect: useEFlow, useRef: useRefFlow } = React;

function FlowLines() {
  const ref = useRefFlow(null);

  useEFlow(() => {
    const svg = ref.current;
    if (!svg) return;
    const paths = svg.querySelectorAll(".flow-path");
    paths.forEach((p, i) => {
      const len = p.getTotalLength ? p.getTotalLength() : 800;
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      p.animate(
        [
          { strokeDashoffset: len, opacity: 0 },
          { strokeDashoffset: len * 0.3, opacity: p.classList.contains("fat") ? 0.07 : 0.12 },
          { strokeDashoffset: -len * 0.4, opacity: 0 },
        ],
        {
          duration: 12000 + i * 1100,
          iterations: Infinity,
          easing: "ease-in-out",
          delay: i * 340,
        }
      );
    });
  }, []);

  // Curly topographic loop paths — organic closed or open spirals
  const paths = [
    // large sweeping loops
    "M 400 320 C 200 80, 900 -60, 1100 180 S 1400 600, 900 580 S 300 480, 400 320 Z",
    "M 1200 200 C 1400 -40, 2100 80, 2000 380 S 1500 700, 1100 500 S 900 200, 1200 200 Z",
    "M 100 600 C -80 380, 400 200, 600 440 S 700 800, 300 780 S 50 700, 100 600 Z",
    "M 1600 500 C 1800 280, 2400 400, 2300 700 S 1800 950, 1500 780 S 1300 620, 1600 500 Z",
    // tighter inner spirals
    "M 700 350 C 580 180, 900 100, 1000 300 S 920 580, 720 500 S 600 420, 700 350 Z",
    "M 1500 300 C 1620 120, 1900 200, 1850 420 S 1600 600, 1400 480 S 1340 360, 1500 300 Z",
    // loose open curves
    "M -100 400 C 200 200, 600 500, 1000 350 S 1600 100, 2000 300 S 2400 550, 2600 450",
    "M -100 700 C 300 500, 700 780, 1100 600 S 1700 380, 2100 560 S 2500 750, 2700 680",
    "M 200 900 C 500 700, 900 900, 1300 750 S 1800 550, 2200 700",
  ];

  return (
    <div className="flow-bg" aria-hidden>
      <svg
        ref={ref}
        viewBox="0 0 2400 1000"
        preserveAspectRatio="xMidYMid slice"
        style={{ animation: "flowFloat 22s ease-in-out infinite" }}
      >
        <defs>
          <radialGradient id="fgFade" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.1" />
          </radialGradient>
          <mask id="fgMask">
            <rect width="2400" height="1000" fill="url(#fgFade)" />
          </mask>
        </defs>
        <g mask="url(#fgMask)">
          {paths.map((d, i) => (
            <path key={i} d={d} className={`flow-path ${i < 4 ? "fat" : ""}`} />
          ))}
        </g>
      </svg>
    </div>
  );
}

window.FlowLines = FlowLines;
