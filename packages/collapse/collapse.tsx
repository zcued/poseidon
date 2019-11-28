import React, { useState, ReactNode } from 'react'

export interface Props {
  value?: string | Array<string>
  accordion?: boolean
  className?: string
  onChange?: any
  children?: ReactNode
}

const toArray = value => {
  let target = value
  if (!Array.isArray(target)) {
    target = target ? [target] : []
  }
  return target
}

function Collapse({ className, value, accordion, onChange, children }: Props) {
  const [activeKey, setActiveKey] = useState(toArray(value))

  const onItemClick = (e: any, key: string) => {
    e.preventDefault()

    if (activeKey.indexOf(key) > -1) {
      setActiveKey(activeKey.filter(k => k !== key))
    } else {
      setActiveKey(accordion ? [key] : activeKey.concat(key))
    }

    if (onChange) {
      onChange(key)
    }
  }

  return (
    <div className={className}>
      {React.Children.map(children, (child: any, index: number) => {
        const key = child.key === null ? index.toString() : child.key
        return React.cloneElement(child, {
          isActive: activeKey.indexOf(key) > -1,
          key: key,
          onClick: e => onItemClick(e, key)
        })
      })}
    </div>
  )
}

export default Collapse
