import { useRef, useEffect } from 'react'

export default function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef<any>(null)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
