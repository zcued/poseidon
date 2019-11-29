import { useState, useEffect } from 'react'
import { canUseDOM } from '@zcool/util'

export interface ScrollPositionProps {
  x: number
  y: number
}

function getScrollPosition(): ScrollPositionProps {
  return canUseDOM()
    ? { x: window.pageXOffset, y: window.pageYOffset }
    : { x: 0, y: 0 }
}

export default function useScrollPosition(): ScrollPositionProps {
  const [position, setScrollPosition] = useState<ScrollPositionProps>(
    getScrollPosition()
  )

  useEffect(() => {
    let requestRunning: number | null = null
    function handleScroll() {
      if (canUseDOM() && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition())
          requestRunning = null
        })
      }
    }

    if (canUseDOM()) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return position
}

export function useScrollXPosition(): number {
  const { x } = useScrollPosition()
  return x
}

export function useScrollYPosition(): number {
  const { y } = useScrollPosition()
  return y
}
