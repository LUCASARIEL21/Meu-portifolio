import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import Model from "../assets/Pc"

export const Tech = () => {
  return (
    <>
      <Canvas style={{ height: "500px", width: "100%" }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Model />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </>
  )
}