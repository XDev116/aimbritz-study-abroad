"use client";

import { useEffect, useState } from "react";

const chapters = [
  { id: "chapter-01", label: "The Dream" },
  { id: "chapter-02", label: "Journey" },
  { id: "chapter-03", label: "Destinations" },
  { id: "chapter-04", label: "Stories" },
];

export function ChapterSidebar() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.4);

      let current = 0;
      chapters.forEach((c, i) => {
        const el = document.getElementById(c.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) current = i;
        }
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 hidden md:block transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
      aria-label="Chapter navigation"
    >
      <ul className="flex flex-col gap-5">
        {chapters.map((c, i) => {
          const isActive = i === active;
          return (
            <li key={c.id}>
              <button
                onClick={() => handleClick(c.id)}
                className="group flex items-center gap-3 text-left"
              >
                <span
                  className="block h-px transition-all duration-500"
                  style={{
                    width: isActive ? "36px" : "16px",
                    background: isActive ? "#f59e0b" : "rgba(255,255,255,0.3)",
                  }}
                />
                <span
                  className="text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-500"
                  style={{
                    color: isActive ? "#f59e0b" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")} — {c.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
