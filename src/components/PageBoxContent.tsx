import React from 'react'

interface PageBoxContentsProps {
  page: Page
}

const PageBoxContents = ({ page }: PageBoxContentsProps) => {
  const {
    name, description, color,
  } = page
  return (
    <>
      <div
        className="absolute w-full h-full"
        style={{ backgroundColor: color, opacity: 0.3 }}
      />
      <div
        className="absolute w-full h-full"
        style={{ backgroundColor: 'black', opacity: 0.15 }}
      />
      <div className="relative h-52 lg:h-72 px-5 lg:px-12 flex flex-col justify-center text-white">
        <h2
          className="font-bold text-2x lg:text-4x tracking-tight leading-none mb-3"
        >
          {name}
        </h2>
        <h4
          className="tracking-wide lg:text-2x opacity-70"
        >
          {description}
        </h4>
      </div>
    </>
  )
}

export default PageBoxContents

export const pageBoxClassName = 'relative rounded-2xl overflow-hidden shadow-lg bg-white'
export const pageBoxStyles = ({ id }: Page) => ({ backgroundImage: `url(/pages/img/${id}.png)` })
