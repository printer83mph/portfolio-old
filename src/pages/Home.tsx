import React from 'react'
import PageIndex from '../components/PageIndex'
import Background from '../components/Background'

const Home = () => (
  <>
    <div className="fixed h-screen w-screen">
      <Background />
    </div>
    <div className="h-screen" />
    <div className="container mx-auto relative min-h-screen">
      <div>
        <h1 className="font-serif font-black text-4x tracking-tight">
          You finally made it!
        </h1>
        <p className="font-sans font-normal text-2x text-gray-400 tracking-wide">
          Keep scrolling to enter a world of wonder !!
        </p>
      </div>
      <div>
        Other stuff...
      </div>
      <PageIndex />
    </div>
  </>
)

export default Home
