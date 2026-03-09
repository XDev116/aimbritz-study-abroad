"use client";

import { useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Html, useProgress } from "@react-three/drei";
import * as THREE from "three";

useGLTF.setDecoderPath("/draco/");

// Persists across mounts — tracks whether intro sequence has already played
let introPlayed = false;

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'black', fontSize: '14px', textAlign: 'center', background: 'rgba(255,255,255,0.8)', padding: '10px', borderRadius: '8px' }}>
        <div>Loading...</div>
        <div>{progress.toFixed(0)}%</div>
      </div>
    </Html>
  );
}

function CEOModel() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/professor3d/ceo_combined.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const intro = actions['intro'];
    const wave = actions['wave'];
    const idle = actions['idle'];
    if (!intro || !wave || !idle) return;

    if (introPlayed) {
      // Already done intro — just show and idle
      if (group.current) group.current.visible = true;
      idle.setLoop(THREE.LoopRepeat, Infinity);
      idle.reset().play();
      return;
    }

    // Wait for CSS walk-in (2s)
    const startTimer = setTimeout(() => {
      if (group.current) group.current.visible = true;
      intro.setLoop(THREE.LoopOnce, 1);
      intro.clampWhenFinished = true;
      intro.reset().play();

      const waveTimer = setTimeout(() => {
        wave.setLoop(THREE.LoopOnce, 1);
        wave.clampWhenFinished = true;
        wave.reset().play();
        intro.fadeOut(0.5);
        wave.fadeIn(0.5);

        const idleTimer = setTimeout(() => {
          introPlayed = true;
          idle.setLoop(THREE.LoopRepeat, Infinity);
          idle.reset().play();
          wave.fadeOut(0.5);
          idle.fadeIn(0.5);
        }, 5208);

        return () => clearTimeout(idleTimer);
      }, 5833);

      return () => clearTimeout(waveTimer);
    }, 2000);

    return () => clearTimeout(startTimer);
  }, [actions]);

  return (
    <group ref={group} scale={1.5} position={[0, -1.8, 0]} visible={false}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/professor3d/ceo_combined.glb");

export function Professor3D() {
  return (
    <div className="w-full h-full" style={{ position: 'relative' }}>
      <Canvas
        shadows={false}
        camera={{ position: [0, 0.5, 4], fov: 50 }}
        gl={{
          preserveDrawingBuffer: false,
          alpha: true,
          antialias: true,
          powerPreference: "default"
        }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={3} />
        <directionalLight position={[2, 5, 2]} intensity={2} />
        <Suspense fallback={<Loader />}>
          <CEOModel />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
