import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import HeyScene from './HeyScene'

const Background = () => (
  <Canvas>
    <ambientLight intensity={1} />
    <Suspense fallback={null}>
      <HeyScene />
    </Suspense>
  </Canvas>
)

export default Background
