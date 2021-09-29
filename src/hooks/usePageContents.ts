import { useEffect, useState } from 'react'

const usePageContents = (id: string) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [contents, setContents] = useState<string>('')

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await fetch(`/pages/${id}.md`)
        const text = await response.text()
        setContents(text)
      } catch (e: any) {
        setContents(`An error occured: ${e}`)
      }
      setLoading(false)
    }

    fetchContents()
  }, [])

  return { loading, contents }
}

export default usePageContents
