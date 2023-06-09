import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/pc-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.09}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.blinn17SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.blinn24SG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.lambert13SG} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.lambert14SG} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.lambert15SG} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.lambert16SG} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.lambert19SG} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.lambert22SG} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.lambert29SG} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.lambert44SG} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.lambert45SG} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.blinn12SG} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.blinn12SG} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.blinn16SG} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.blinn18SG} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.blinn21SG} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.blinn16SG} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.blinn25SG} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.blinn26SG} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.blinn16SG} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.lambert11SG} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.lambert20SG} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.lambert21SG} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.lambert22SG} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.lambert25SG} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.lambert27SG} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.lambert28SG} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.lambert29SG} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.lambert30SG} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.lambert31SG} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.lambert32SG} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.lambert33SG} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.lambert35SG} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.lambert11SG} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.blinn16SG} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.lambert43SG} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.lambert43SG} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.lambert7SG} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.lambert7SG} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.lambert8SG} />
      </group>
    </group>
  )
}

useGLTF.preload('/pc-transformed.glb')
