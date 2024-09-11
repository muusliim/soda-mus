"use client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { Suspense } from "react";
import dynamic from "next/dynamic";

type Props = {};

export default function ViewCanvas({}: Props) {
  const Loader = dynamic(
    () => import("@react-three/drei").then((mod) => mod.Loader),
    { ssr: false },
  ); 
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 40,
        }}
        camera={{ fov: 30 }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
