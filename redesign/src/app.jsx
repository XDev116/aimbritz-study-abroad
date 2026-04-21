// App root — mounts everything
const { useEffect: useEA } = React;

function App() {
  useEA(() => {
    // Apply initial theme
    const t = (window.__TWEAKS || {}).palette || "ember";
    document.body.setAttribute("data-theme", t);
    if ((window.__TWEAKS || {}).showGrain === false) document.body.classList.remove("grain");

    // Custom cursor dot
    const dot = document.getElementById("cursorDot");
    if (dot) {
      let x = 0, y = 0;
      window.addEventListener("mousemove", (e) => {
        x = e.clientX; y = e.clientY;
        dot.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      });
    }
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <BrandPromise />
      <SuccessStory />
      <Destinations />
      <Universities />
      <Journey />
      <Stats />
      <Reels />
      <CEO />
      <CTA />
      <Tweaks />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
