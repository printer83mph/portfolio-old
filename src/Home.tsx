import React from 'react'
import Background from './components/Background'
import TypeOut from './components/TypeOut'

const Home = () => (
  <>
    <div className="fixed h-screen w-screen">
      <Background />
    </div>
    <div className="h-screen" />
    <div className="container mx-auto relative">
      <div className="min-h-screen">
        <h1 className="font-serif font-black text-4x tracking-tight">
          <TypeOut>
            You finally made it!
          </TypeOut>
        </h1>
        <p className="font-sans font-normal text-2x text-gray-500 tracking-wide">
          Keep scrolling to enter a world of wonder !!
        </p>
      </div>
    </div>
  </>
)

export default Home
