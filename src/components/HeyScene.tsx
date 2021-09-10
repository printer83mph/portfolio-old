import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, SceneProps, useFrame, useLoader } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { AnimationMixer, LoopOnce } from 'three'

const SCROLL_SCALE = 5
const [BASE_X, BASE_Y, BASE_Z] = [.3, -.2, 1]

type HeySceneProps = {
  mobile: Boolean
}

const HeyScene = ({mobile, ...props}: SceneProps & HeySceneProps) => {
  const { scene, animations } = useGLTF('/res/hey_text.glb')

  const group = useRef()
  const sceneRef = useRef()
  const [mixer] = useState(() => new AnimationMixer())

  useEffect(() => {
    const animation = mixer.clipAction(animations[0], group.current)
    animation.setLoop(LoopOnce)
    animation.clampWhenFinished = true
    animation.play()
    // console.log(group.current)
  }, [])

  useFrame((state, delta) => {
    mixer.update(delta)
    if (group.current) group.current.position.set(BASE_X, BASE_Y + window.scrollY / window.innerHeight * SCROLL_SCALE, BASE_Z)
  })

  return (
    <group ref={group}>
      <primitive name="Scene" object={scene} ref={sceneRef} {...props} />
    </group>
  )
}

export default HeyScene
