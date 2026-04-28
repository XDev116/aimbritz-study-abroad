"use client";

import { useEffect, useRef } from "react";

/**
 * Expanding ring field — organic circles that spawn small, grow outward,
 * and keep emerging from inside one another continuously. Like microscope
 * cells dividing or ripples in water. Each ring lives a few seconds,
 * growing + fading, while new rings spawn at random positions.
 *
 * Reacts to cursor: rings near the cursor get pushed / distorted.
 */

interface Ring {
  cx: number;          // center x in canvas logical coords
  cy: number;          // center y
  r: number;           // current radius
  maxR: number;        // max radius before it dies
  life: number;        // 0..1 lifecycle (0 = born, 1 = dead)
  speed: number;       // growth rate
  // Per-ring deformation state (so cursor displaces each differently)
  offsetX: number;
  offsetY: number;
  vx: number;
  vy: number;
  // Wobble for organic shape
  wobbleSeed: number;
}

export function BackgroundCurls() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Disable on mobile — RAF loop + canvas painting is heavy on low-end phones
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── Config ──────────────────────────────────────────────────────
    const MAX_RINGS = 14;            // rings on screen at once
    const SPAWN_EVERY_MS = 2400;     // spawn interval (slower — less frequent births)
    const MIN_RADIUS = 20;           // radius when spawned
    const MAX_RADIUS_RANGE: [number, number] = [180, 520]; // range of maxR
    const GROWTH_RATE_RANGE: [number, number] = [0.025, 0.065]; // much slower growth
    const CURSOR_RADIUS = 260;       // cursor influence zone
    const CURSOR_PUSH = 40;          // max displacement
    const CURSOR_FORCE = 0.05;       // spring force
    const DAMPING = 0.88;            // velocity damping
    const SPAWN_INSIDE_CHANCE = 0.55;// odds a new ring spawns *inside* an existing one

    let width = 0;
    let height = 0;
    let dpr = 1;
    const rings: Ring[] = [];
    let lastSpawn = performance.now();
    let lastFrame = performance.now();

    const cursor = { x: -9999, y: -9999 };

    const getStroke = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--flow-color").trim();
      return v || "rgba(40,40,40,0.25)"; // soft dark line with transparency, same on every section
    };

    // ── Setup / resize ──────────────────────────────────────────────
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Cursor ──────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // ── Spawn a new ring, optionally inside an existing one ─────────
    const spawnRing = () => {
      let cx: number;
      let cy: number;

      const spawnInside =
        rings.length > 0 && Math.random() < SPAWN_INSIDE_CHANCE;

      if (spawnInside) {
        // Pick a random existing ring and spawn inside it, near its center
        const host = rings[Math.floor(Math.random() * rings.length)];
        const r = Math.random() * host.r * 0.6;
        const a = Math.random() * Math.PI * 2;
        cx = host.cx + Math.cos(a) * r;
        cy = host.cy + Math.sin(a) * r;
      } else {
        // Random position across the whole viewport
        cx = Math.random() * width;
        cy = Math.random() * height;
      }

      const maxR =
        MAX_RADIUS_RANGE[0] +
        Math.random() * (MAX_RADIUS_RANGE[1] - MAX_RADIUS_RANGE[0]);
      const speed =
        GROWTH_RATE_RANGE[0] +
        Math.random() * (GROWTH_RATE_RANGE[1] - GROWTH_RATE_RANGE[0]);

      rings.push({
        cx,
        cy,
        r: MIN_RADIUS * (0.4 + Math.random() * 0.6),
        maxR,
        life: 0,
        speed,
        offsetX: 0,
        offsetY: 0,
        vx: 0,
        vy: 0,
        wobbleSeed: Math.random() * 1000,
      });

      // Cap count
      if (rings.length > MAX_RINGS) rings.shift();
    };

    // Seed initial rings so it's not empty on load
    for (let i = 0; i < 6; i++) spawnRing();

    // ── Draw one ring with organic wobble ───────────────────────────
    const drawRing = (ring: Ring, time: number) => {
      const segments = 64;
      const alpha = Math.sin(Math.PI * ring.life) * 0.55; // fade in + out
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        // Organic wobble — small radial distortion so rings aren't perfect circles
        const wob =
          Math.sin(angle * 3 + time * 0.001 + ring.wobbleSeed) * (ring.r * 0.03) +
          Math.sin(angle * 5 + time * 0.0013 + ring.wobbleSeed * 1.7) * (ring.r * 0.02);
        const r = ring.r + wob;
        const x = ring.cx + ring.offsetX + Math.cos(angle) * r;
        const y = ring.cy + ring.offsetY + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    };

    // ── Main loop ───────────────────────────────────────────────────
    let raf: number;
    const tick = (now: number) => {
      const dt = Math.min(now - lastFrame, 48); // ms since last frame, clamp
      lastFrame = now;

      // Spawn new rings periodically (with slight jitter)
      if (now - lastSpawn > SPAWN_EVERY_MS * (0.6 + Math.random() * 0.8)) {
        spawnRing();
        lastSpawn = now;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = getStroke();
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = rings.length - 1; i >= 0; i--) {
        const ring = rings[i];

        // Grow
        ring.r += ring.speed * dt;
        ring.life = Math.min(1, ring.r / ring.maxR);

        // Cursor push
        const dx = ring.cx + ring.offsetX - cursor.x;
        const dy = ring.cy + ring.offsetY - cursor.y;
        const dist = Math.hypot(dx, dy);
        if (dist < CURSOR_RADIUS) {
          const force = 1 - dist / CURSOR_RADIUS;
          const falloff = force * force;
          const angle = Math.atan2(dy, dx);
          ring.vx += Math.cos(angle) * CURSOR_PUSH * falloff * CURSOR_FORCE;
          ring.vy += Math.sin(angle) * CURSOR_PUSH * falloff * CURSOR_FORCE;
        }
        // Spring back to origin
        ring.vx += -ring.offsetX * 0.04;
        ring.vy += -ring.offsetY * 0.04;
        ring.vx *= DAMPING;
        ring.vy *= DAMPING;
        ring.offsetX += ring.vx;
        ring.offsetY += ring.vy;

        // Draw
        drawRing(ring, now);

        // Remove when dead
        if (ring.life >= 1) {
          rings.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 3 }}
    />
  );
}
