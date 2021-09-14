import { MutableRefObject, useEffect, useState } from 'react'

const useVisible = (target: MutableRefObject<HTMLElement>) => {
  const [visible, setVisible] = useState(false)

  const observer = new IntersectionObserver(([entry]) => {
    setVisible(entry.isIntersecting)
  })

  useEffect(() => {
    observer.observe(target.current)
    return () => { observer.disconnect() }
  }, [])

  return visible
}

export default useVisible
