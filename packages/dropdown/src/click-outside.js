import React, { useEffect } from 'react'

function ClickOutSide(props) {
  let wrapper = null

  useEffect(() => {
    document.addEventListener('click', handleClick, true)

    return function cleanup() {
      document.removeEventListener('click', handleClick, true)
    }
  })

  const handleClick = e => {
    if (isContains(e.target)) {
      return
    }

    props.onClick(e)
  }

  const isContains = node => {
    if (!wrapper) {
      return true
    }

    return wrapper !== node && wrapper.contains(node)
  }

  const { children, className } = props

  return (
    <div
      className={className}
      ref={x => {
        wrapper = x
      }}
    >
      {children}
    </div>
  )
}

export default ClickOutSide
