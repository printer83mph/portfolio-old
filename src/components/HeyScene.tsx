/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useRef } from 'react'
import { SceneProps, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { AnimationMixer, LoopOnce, Object3D } from 'three'

const SCROLL_SCALE = 5
const [BASE_X, BASE_Y, BASE_Z] = [0.3, -0.2, 1]

const HeyScene = (props: SceneProps) => {
  const { scene, animations } = useGLTF('/res/hey_text.glb')

  const group = useRef<Object3D>(null!)
  const sceneRef = useRef(null!)
  const mixer = useRef<AnimationMixer>()

  useEffect(() => {
    mixer.current = new AnimationMixer(group.current)
    const animation = mixer.current.clipAction(animations[0], group.current)
    animation.setLoop(LoopOnce, 0)
    animation.clampWhenFinished = true
    animation.play()
  }, [])

  useFrame((_state, delta) => {
    if (!mixer.current) return
    mixer.current.update(delta)
    if (group.current) {
      group.current.position.set(
        BASE_X,
        BASE_Y + (window.scrollY / window.innerHeight) * SCROLL_SCALE,
        BASE_Z,
      )
    }
  })

  return (
    <group ref={group}>
      <primitive name="Scene" object={scene} ref={sceneRef} {...props} />
    </group>
  )
}

export default HeyScene
