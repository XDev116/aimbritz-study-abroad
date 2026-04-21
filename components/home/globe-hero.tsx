"use client";

import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useScroll, useTransform, motion } from "framer-motion";
import * as THREE from "three";

// ── Globe mesh ──────────────────────────────────────────────────────────────
function GlobeMesh({ scrollY }: { scrollY: any }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  // Build Earth material once
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
      (tex) => {
        if (material.current) {
          tex.colorSpace = THREE.SRGBColorSpace;
          material.current.map = tex;
          // Tint toward deep night — mute the bright day colours
          material.current.color.set("#ffffff");
          material.current.needsUpdate = true;
        }
      }
    );
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;

    // Get current scroll progress (0–1)
    const rawScroll = scrollY.get();
    const progress = Math.min(rawScroll / 400, 1); // 0 at top, 1 at 400px scrolled

    // Base slow rotation + speed up as user scrolls
    const baseSpeed = 0.003;
    const scrollSpeed = progress * 0.08;
    meshRef.current.rotation.y += baseSpeed + scrollSpeed;

    // Zoom: camera moves from z=4 → z=0.2 as scroll progress goes 0 → 1
    camera.position.z = THREE.MathUtils.lerp(4, 0.2, progress);

    // Fade out globe opacity near end of zoom
    if (material.current) {
      material.current.opacity = progress > 0.85 ? 1 - ((progress - 0.85) / 0.15) : 1;
      material.current.transparent = progress > 0.85;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.4, 64, 64]} />
      <meshStandardMaterial
        ref={material}
        color="#3a5a8a"
        roughness={0.8}
        metalness={0.0}
      />
    </mesh>
  );
}

// Atmosphere glow — two layers for depth
function Atmosphere() {
  return (
    <>
      {/* Inner soft haze */}
      <mesh>
        <sphereGeometry args={[1.44, 64, 64]} />
        <meshStandardMaterial
          color="#1a4aff"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
      {/* Outer corona */}
      <mesh>
        <sphereGeometry args={[1.56, 64, 64]} />
        <meshStandardMaterial
          color="#0a1aff"
          transparent
          opacity={0.035}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

// Stars
function Stars() {
  const points = useRef<THREE.Points>(null);

  const geo = useRef<THREE.BufferGeometry | null>(null);
  if (!geo.current) {
    geo.current = new THREE.BufferGeometry();
    const arr = new Float32Array(10000 * 3);
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - 0.5) * 200;
    geo.current.setAttribute("position", new THREE.BufferAttribute(arr, 3));
  }

  useFrame(() => {
    if (points.current) points.current.rotation.y += 0.00005;
  });

  return (
    <points ref={points} geometry={geo.current}>
      <pointsMaterial color="#c8d8ff" size={0.04} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

// ── Main component ──────────────────────────────────────────────────────────
export function GlobeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Text fades out as user starts scrolling
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const textY = useTransform(scrollY, [0, 200], [0, -40]);

  // Destination reveal: fades in at ~300px, fully visible at 500px
  const londonOpacity = useTransform(scrollY, [300, 500], [0, 1]);

  // Parallax layers
  const londonBgY = useTransform(scrollY, [300, 800], ["0%", "-15%"]);
  const londonMidY = useTransform(scrollY, [300, 800], ["0%", "-35%"]);
  const londonFgY = useTransform(scrollY, [300, 800], ["0%", "-55%"]);

  return (
    // Tall container so scroll has room
    <div ref={containerRef} style={{ height: "150vh" }} className="relative">

      {/* Sticky viewport — everything sticks while user scrolls */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#020818]">

        {/* ── 3D Globe Canvas ── */}
        <Canvas
          camera={{ position: [0, 0, 4], fov: 45 }}
          style={{ position: "absolute", inset: 0 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={2.5} />
          <directionalLight position={[-4, 2, 3]} intensity={6} color="#ffffff" />
          <directionalLight position={[5, -1, -4]} intensity={2.5} color="#6699ff" />
          <pointLight position={[0, 4, 1]} intensity={2} color="#ffffff" />
          <Stars />
          <Suspense fallback={null}>
            <Atmosphere />
            <GlobeMesh scrollY={scrollY} />
          </Suspense>
        </Canvas>

        {/* ── Hero text (fades out on scroll) ── */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-6 text-center"
        >
          <p className="text-xs font-semibold tracking-[0.4em] text-amber-400 uppercase mb-4">
            Study Abroad Consultancy
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
            YOUR WORLD<br />
            <span className="text-amber-400">AWAITS</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/60 max-w-md">
            Scroll to explore destinations
          </p>
          {/* Scroll indicator */}
          <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-bounce">
            <p className="text-xs text-white/40 tracking-widest uppercase">Scroll</p>
            <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </motion.div>

        {/* ── Destination reveal (appears as globe zooms in) ── */}
        <motion.div
          style={{ opacity: londonOpacity }}
          className="absolute inset-0 z-20"
        >
          {/* BG layer */}
          <motion.div
            style={{ y: londonBgY }}
            className="absolute inset-0 scale-110"
          >
            <div className="w-full h-full bg-gradient-to-b from-[#0a0f2e] via-[#0d1a3a] to-[#060d1f]" />
          </motion.div>

          {/* Mid layer */}
          <motion.div
            style={{ y: londonMidY }}
            className="absolute inset-0"
          >
            <div className="w-full h-full bg-gradient-to-t from-[#060d1f] via-transparent to-transparent" />
          </motion.div>

          {/* FG layer */}
          <motion.div
            style={{ y: londonFgY }}
            className="absolute bottom-0 left-0 right-0 h-48"
          >
            <div className="w-full h-full bg-gradient-to-t from-[#060d1f] to-transparent" />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
