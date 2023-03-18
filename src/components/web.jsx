import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import Model from "../../public/WEB/Web"

export const WebDesign = () => {
  return (
    <>
      <Canvas>
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