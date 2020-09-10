import { useEffect, useState } from 'react'

export default function useMousePosition(): { x: number; y: number } {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let requestRunning: number | null = null

    function handleMove(e: MouseEvent) {
      if (requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setPosition({ x: e.pageX, y: e.pageY })
          requestRunning = null
        })
      }
    }

    window.addEventListener('mousemove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])

  return position
}
