import { useState, useRef, useEffect } from 'react'

export default function useElementHeight() {
  const [height, setHeight] = useState<number>(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [ref.current])

  return [ref, height]
}
