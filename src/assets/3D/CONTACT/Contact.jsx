/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 contact.gltf
Author: patrakeevasveta (https://sketchfab.com/patrakeevasveta)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cell-phone-day-20-ded1452f63e94396810d89c35fc1b736
Title: Cell phone - Day 20
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../../../../public/CONTACT/contact.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.06}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="phone_0" rotation={[0, -0.05, 0]}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.cell_phone} />
              </group>
              <group name="1_1" position={[-1.26, 0.09, -0.26]} scale={1.01}>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.cell_phone} />
              </group>
              <group name="2_2" position={[1.26, 0.09, -0.26]} scale={1.01}>
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.cell_phone} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/contact.gltf')
