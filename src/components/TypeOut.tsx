import React, { useEffect, useRef, useState } from 'react'
import useVisible from '../hooks/useVisible'

interface TypeOutProps {
  children: React.ReactText
}

const TypeOut = ({ children }: TypeOutProps) : JSX.Element => {
  const ref = useRef<HTMLSpanElement>(null!)
  const visible = useVisible(ref)
  const [currentTimeout, setCurrentTimeout] = useState(null)

  useEffect(() => {
    if (!visible) return
    const text = children.toString()
    // todo: loop through text and set timeouts
  }, [visible])

  return (
    <span ref={ref}>
      { visible ? children : ' ' }
    </span>
  )
}

export default TypeOut
