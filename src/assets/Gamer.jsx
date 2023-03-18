import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/gamer-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[1.22, 0, 0]} rotation={[0, -0.02, 0]}>
        <group rotation={[0, Math.PI / 2, 0]}>
          <mesh geometry={nodes.Cuerpo_pose2_low_Cuerpo_pose2_low_0.geometry} material={materials.Cuerpo_pose2_low} />
          <mesh geometry={nodes.pollera_pollera_0.geometry} material={materials.pollera} />
          <mesh geometry={nodes.cestus_low_cestus_low1_0.geometry} material={materials.cestus_low1} />
          <mesh geometry={nodes.cestus_low1_cestus_low1_0.geometry} material={materials.cestus_low1} />
          <mesh geometry={nodes.Ojosydientes2_low_Ojosydientes2_low_0.geometry} material={materials.Ojosydientes2_low} />
          <mesh geometry={nodes.accesorios1_low_accesorios1_low_0.geometry} material={materials.accesorios1_low} />
          <mesh geometry={nodes.accesorios1_low_accesorios1_low_0_1.geometry} material={materials.accesorios1_low} />
          <mesh geometry={nodes.harpia_cuerpo_pose1_harpia_cuerpo_pose1_0.geometry} material={materials.material_0} />
          <mesh geometry={nodes.harpia_plumas_harpia_plumas_0.geometry} material={materials.harpia_plumas} />
          <mesh geometry={nodes.harpia_plumas_harpia_plumas_0_1.geometry} material={materials.harpia_plumas} />
          <mesh geometry={nodes.harpia_plumas_harpia_plumas_0_2.geometry} material={materials.harpia_plumas} />
          <mesh geometry={nodes.harpia_plumas_harpia_plumas_0_3.geometry} material={materials.harpia_plumas} />
          <mesh geometry={nodes.harpia_plumas_harpia_plumas_0_4.geometry} material={materials.harpia_plumas} />
          <mesh geometry={nodes.harpia_plumas_harpia_plumas_0_5.geometry} material={materials.harpia_plumas} />
          <mesh geometry={nodes.harpia_alas_harpia_alas_0.geometry} material={materials.harpia_alas} />
          <mesh geometry={nodes.harpia_alas_harpia_alas_0_1.geometry} material={materials.harpia_alas} />
          <mesh geometry={nodes.basekratosfinaldv_basekratosfinaldv_0.geometry} material={materials.basekratosfinaldv} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/gamer-transformed.glb')
