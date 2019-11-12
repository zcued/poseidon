import React, { useRef, useState, useEffect, ReactNode } from 'react'

export interface Props {
  isShow: boolean
  children: ReactNode
}

export default function CollapseTransition({ isShow, children }: Props) {
  const duration = 300
  const panel = useRef(null)
  let panelHeight: string | number = 'auto'
  let imgs = panel.current ? panel.current.querySelectorAll('img') : []

  const [height, setHeight] = useState<string | number>(0)

  const reloadHeight = () => {
    panelHeight = panel.current.offsetHeight
    setHeight(panelHeight)
  }

  useEffect(() => {
    reloadHeight()
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener('load', reloadHeight)
    }

    return () => {
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].removeEventListener('load', reloadHeight)
      }
    }
  }, [imgs])

  const h = isShow ? height || 'auto' : 0

  return (
    <div
      style={{
        overflow: 'hidden',
        transition: `all ease ${duration / 1000}s`,
        height: h
      }}
    >
      <div ref={panel}>{children}</div>
    </div>
  )
}
