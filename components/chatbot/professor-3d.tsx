"use client";

import { useRef, useEffect, Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Html, useProgress } from "@react-three/drei";
import * as THREE from "three";

useGLTF.setDecoderPath("/draco/");

/* ──────────────────────────────────────────────────────────────────────
   OUTFIT REGISTRY
   Each outfit is its own GLB rigged to the SAME 78-bone skeleton as
   ceo-base.glb. To add a new outfit for an event/season:
     1. Rig a garment to the skeleton in Blender, export to /public/professor3d/outfits/<name>.glb
     2. Add a line below: <key>: "/professor3d/outfits/<name>.glb"
     3. Pass <key> as the `outfit` prop (or set DEFAULT_OUTFIT / auto-pick by date)
   ────────────────────────────────────────────────────────────────────── */
export const OUTFITS: Record<string, string> = {
  casual: "/professor3d/outfits/casual-hoodie.glb",
  // formal: "/professor3d/outfits/formal-suit.glb",
  // santa:  "/professor3d/outfits/santa.glb",
};

export const DEFAULT_OUTFIT = "casual";

const BASE_URL = "/professor3d/ceo-base.glb";

// Persists across mounts — tracks whether intro sequence has already played
let introPlayed = false;

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          color: "#0E0E10",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "11px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          textAlign: "center",
          background: "rgba(246,242,234,0.85)",
          padding: "10px 14px",
          borderRadius: "999px",
          border: "1px solid rgba(14,14,16,0.08)",
        }}
      >
        {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

/* Fix invisible hair — the hair material is transmissive (renders invisible
   without an env map) with a harsh alpha cutoff. Make it plain + gently masked. */
function fixHair(root: THREE.Object3D) {
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (!mesh.isMesh) return;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    mats.forEach((m) => {
      const mat = m as THREE.MeshPhysicalMaterial;
      if (mat?.name?.includes("hair")) {
        mesh.frustumCulled = false;
        mat.transmission = 0;
        mat.thickness = 0;
        mat.ior = 1;
        mat.transparent = false;
        mat.depthWrite = true;
        mat.alphaTest = 0.15;
        mat.side = THREE.DoubleSide;
        mat.needsUpdate = true;
      }
    });
  });
}

function CEOModel({ outfit }: { outfit: string }) {
  const group = useRef<THREE.Group>(null);

  // Base carries the body + hair + shoes + skeleton + animations
  const base = useGLTF(BASE_URL);
  // Selected outfit GLB (its own copy of the same skeleton + the garment skin)
  const outfitUrl = OUTFITS[outfit] ?? OUTFITS[DEFAULT_OUTFIT];
  const outfitGltf = useGLTF(outfitUrl);

  // Animations are driven by the BASE skeleton
  const { actions } = useAnimations(base.animations, group);

  /* Graft the outfit's skinned mesh(es) onto the base's skeleton so they
     deform with the same animation. We match bones by name (identical rigs). */
  const dressedScene = useMemo(() => {
    const scene = base.scene;

    // Build a name → Bone map from the base skeleton
    const baseBones: Record<string, THREE.Bone> = {};
    scene.traverse((o) => {
      if ((o as THREE.Bone).isBone) baseBones[o.name] = o as THREE.Bone;
    });

    // Find the base armature root to attach garment meshes under
    let baseArmature: THREE.Object3D | null = null;
    scene.traverse((o) => {
      if (!baseArmature && (o as THREE.Bone).isBone) baseArmature = o.parent;
    });

    // Collect the outfit's skinned meshes, rebind them to the base skeleton
    const garmentMeshes: THREE.SkinnedMesh[] = [];
    outfitGltf.scene.traverse((o) => {
      const sm = o as THREE.SkinnedMesh;
      if (sm.isSkinnedMesh) garmentMeshes.push(sm);
    });

    garmentMeshes.forEach((sm) => {
      // Rebuild this mesh's skeleton from the BASE bones (same names/order)
      const oldBones = sm.skeleton.bones;
      const newBones = oldBones.map((b) => baseBones[b.name] ?? b);
      const newSkeleton = new THREE.Skeleton(newBones, sm.skeleton.boneInverses);
      // Detach from its original armature and attach to the base scene
      const target = baseArmature ?? scene;
      target.add(sm);
      sm.bind(newSkeleton, sm.bindMatrix);
      sm.frustumCulled = false;
    });

    fixHair(scene);
    return scene;
  }, [base.scene, outfitGltf.scene]);

  useEffect(() => {
    const intro = actions["intro"];
    const wave = actions["wave"];
    const idle = actions["idle"];
    if (!intro || !wave || !idle) return;

    if (introPlayed) {
      if (group.current) group.current.visible = true;
      idle.setLoop(THREE.LoopRepeat, Infinity);
      idle.reset().play();
      return;
    }

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
        }, 5133);

        return () => clearTimeout(idleTimer);
      }, 2867);

      return () => clearTimeout(waveTimer);
    }, 2000);

    return () => clearTimeout(startTimer);
  }, [actions]);

  return (
    <group ref={group} scale={1.5} position={[0, -1.8, 0]} visible={false}>
      <primitive object={dressedScene} />
    </group>
  );
}

useGLTF.preload(BASE_URL);
useGLTF.preload(OUTFITS[DEFAULT_OUTFIT]);

export function Professor3D({ outfit = DEFAULT_OUTFIT }: { outfit?: string }) {
  return (
    <div className="w-full h-full" style={{ position: "relative", touchAction: "pan-y", pointerEvents: "none" }}>
      <Canvas
        style={{ touchAction: "pan-y", pointerEvents: "none" }}
        shadows={false}
        camera={{ position: [0, 0.5, 4], fov: 50 }}
        gl={{
          preserveDrawingBuffer: false,
          alpha: true,
          antialias: true,
          powerPreference: "default",
        }}
        performance={{ min: 0.5 }}
      >
        {/* Warm ivory light — 5200K directional keys a natural complexion on paper */}
        <ambientLight intensity={1.5} color="#fff4e0" />
        <directionalLight position={[3, 4, 3]} intensity={1.4} color="#fff4e0" />
        <directionalLight position={[-2, 2, -1]} intensity={0.35} color="#ffe2c7" />
        <Suspense fallback={<Loader />}>
          <CEOModel outfit={outfit} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}