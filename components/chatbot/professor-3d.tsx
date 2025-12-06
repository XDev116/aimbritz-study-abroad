"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Html, useProgress } from "@react-three/drei";
import * as THREE from "three";

// Set up Draco decoder for compressed models
useGLTF.setDecoderPath("/draco/");

// Loading component
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'black', fontSize: '14px', textAlign: 'center', background: 'rgba(255,255,255,0.8)', padding: '10px', borderRadius: '8px' }}>
        <div>Loading Professor...</div>
        <div>{progress.toFixed(0)}%</div>
      </div>
    </Html>
  );
}

function ProfessorModel() {
  const group = useRef<THREE.Group>(null);

  // Load complete model with all 4 animations from Mixamo (optimized: 1.18MB)
  const { scene, animations } = useGLTF("/professor3d/Professor_Complete.glb");
  const { actions, names } = useAnimations(animations, group);
  const [currentAnimation, setCurrentAnimation] = useState<string>("idle");

  // Cleanup on unmount to free memory
  useEffect(() => {
    return () => {
      if (scene) {
        scene.traverse((child: any) => {
          if (child.isMesh) {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach((mat: any) => mat.dispose());
              } else {
                child.material.dispose();
              }
            }
          }
        });
      }
    };
  }, [scene]);

  // Fix material visibility - Force fully opaque
  useEffect(() => {
    if (scene) {
      scene.traverse((child: any) => {
        if (child.isMesh && child.material) {
          // Force material to be fully opaque
          child.material.transparent = false;
          child.material.opacity = 1.0;
          child.material.alphaTest = 0;
          child.material.depthWrite = true;
          child.material.depthTest = true;

          // Ensure proper rendering
          child.material.side = THREE.FrontSide;
          child.material.wireframe = false;

          // Remove any transmission/transparency effects
          if (child.material.transmission !== undefined) {
            child.material.transmission = 0;
          }
          if (child.material.ior !== undefined) {
            child.material.ior = 1.5;
          }

          // Optimize material properties
          child.material.roughness = 0.7;
          child.material.metalness = 0.0;

          // Ensure textures use correct color space
          if (child.material.map) {
            child.material.map.colorSpace = THREE.SRGBColorSpace;
            child.material.map.needsUpdate = true;
          }

          // Disable shadows to save memory
          child.castShadow = false;
          child.receiveShadow = false;

          child.material.needsUpdate = true;
        }
      });
    }
  }, [scene]);

  // Initialize animations - Start with waving on page load
  useEffect(() => {
    if (actions && names.length > 0) {
      // Set all animations to loop
      Object.values(actions).forEach((action) => {
        if (action) {
          action.setLoop(THREE.LoopRepeat, Infinity);
          action.clampWhenFinished = false;
        }
      });

      // Start with Waving animation (mixamo.com.003) - Welcome gesture
      const wavingAnim = names[3]; // mixamo.com.003
      if (actions[wavingAnim]) {
        actions[wavingAnim].reset().play();
        setCurrentAnimation(wavingAnim);
      }
    }
  }, [actions, names, animations]);

  // Animation cycling - After waving, alternate between talking and idle
  useEffect(() => {
    if (!actions || names.length === 0) return;

    // Animation sequence after initial wave:
    // Waving (3s on first load) → Talking (10s) → Idle (10s) → Talking → Idle...
    const animCycle = [names[1], names[0]]; // Talking, Idle (optimized cycle)

    const interval = setInterval(() => {
      const currentIndexInCycle = animCycle.indexOf(currentAnimation);

      // If currently waving (first animation), switch to talking
      if (currentAnimation === names[3]) {
        const nextAction = actions[names[1]]; // Talking
        const currentAction = actions[currentAnimation];
        if (currentAction && nextAction) {
          currentAction.fadeOut(0.5);
          nextAction.reset().fadeIn(0.5).play();
          setCurrentAnimation(names[1]);
        }
      } else {
        // Alternate between talking and idle
        const nextIndexInCycle = (currentIndexInCycle + 1) % animCycle.length;
        const nextAnimName = animCycle[nextIndexInCycle];
        const currentAction = actions[currentAnimation];
        const nextAction = actions[nextAnimName];

        if (currentAction && nextAction) {
          currentAction.fadeOut(0.5);
          nextAction.reset().fadeIn(0.5).play();
          setCurrentAnimation(nextAnimName);
        }
      }
    }, 6000); // Switch every 6 seconds for more dynamic feel

    return () => clearInterval(interval);
  }, [actions, names, currentAnimation]);

  return (
    <group ref={group} dispose={null} scale={2} position={[0, -0.4, 0]}>
      <primitive object={scene} />
    </group>
  );
}

// Preload complete model with all animations
useGLTF.preload("/professor3d/Professor_Complete.glb");

export function Professor3D() {
  return (
    <div className="w-full h-full" style={{ position: 'relative', minHeight: '500px' }}>
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
        {/* Simplified lighting - 2 lights for memory optimization */}
        <ambientLight intensity={3} />
        <directionalLight position={[2, 5, 2]} intensity={2} />

        <Suspense fallback={<Loader />}>
          <ProfessorModel />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}
