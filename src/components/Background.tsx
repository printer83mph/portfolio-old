import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import HeyScene from './HeyScene'

const Background = () => {

  return (
    <Canvas>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <HeyScene mobile={false} />
      </Suspense>
    </Canvas>
  )
}

export default Background
