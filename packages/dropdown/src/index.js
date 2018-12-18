import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Manager, Popper, Reference } from 'react-popper'
import { T } from '@zcool/util'
import ClickOutSide from './click-outside'

export const StyledClickOutSide = styled(ClickOutSide)`
  display: inline-block;
  background-color: transparent;
  position: relative;
  color: ${T('palette.black')};
`

export const TextContainer = styled.div`
  padding: ${T('spacing.xs')}px 0;
  cursor: pointer;

  & > [data-icon='true'] {
    margin-left: ${T('spacing.xs')}px;
  }
`

export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

export const PoppersContainer = styled.div`
  opacity: 0;
  position: absolute;
  background-color: ${T('palette.white')};
  animation: ${fadeIn} 0.1s ease-in 0.1s forwards;
  z-index: 10;
  box-shadow: 0 6px 12px ${T('palette.black16')};
  min-width: 100%;
`

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen || false)
  const [isChildOpen, setIsChildOpen] = useState(false)
  const isControl = props.hasOwnProperty('isOpen')
  const opened = isControl ? props.isOpen : isOpen
  let timer = null
  const { className, text, children, placement, childPlacement } = props

  const handleClick = e => {
    if (props.trigger === 'click') {
      if (!isControl) {
        toggle(e)
      } else {
        props.onToggle(e)
      }
    }
  }

  const handleLeave = e => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      if (props.trigger === 'hover') {
        if (!isControl) {
          setIsOpen(false)
          setIsChildOpen(false)
        } else {
          props.onToggle(e)
        }
      }
    }, props.mouseLeaveDelay)
  }

  const handleEnter = e => {
    if (timer) clearTimeout(timer)
    if (props.trigger === 'hover') {
      if (!isControl) {
        setIsOpen(true)
        setIsChildOpen(false)
      } else {
        props.onToggle(e)
      }
    }
  }

  const childHandleEnter = () => {
    if (timer) clearTimeout(timer)
    setIsChildOpen(true)
  }

  const childHandleLeave = () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      setIsChildOpen(false)
      handleLeave()
    }, props.mouseLeaveDelay)
  }

  const handleClickOutSide = () => {
    if (!isControl) {
      setIsOpen(false)
      setIsChildOpen(false)
    }
  }

  const toggle = e => {
    props.onToggle(e)
    setIsOpen(!isOpen)
  }

  const getSubMenuOrItem = item => {
    const childrenItems = item.props.children
    if (Array.isArray(childrenItems)) {
      if (childrenItems && childrenItems.length > 0) {
        return (
          <Manager>
            <div className={className}>
              <Reference>
                {({ ref }) => (
                  <TextContainer
                    ref={ref}
                    data-text={true}
                    aria-expanded={isOpen}
                    onClick={handleClick}
                    onMouseLeave={childHandleLeave}
                    onMouseEnter={childHandleEnter}
                  >
                    {item.props.text}
                  </TextContainer>
                )}
              </Reference>

              {isChildOpen && (
                <Popper placement={childPlacement}>
                  {({ ref, style }) => (
                    <PoppersContainer ref={ref} style={{ ...style }}>
                      {childrenItems.map(item => {
                        return React.cloneElement(React.Children.only(item), {
                          onClick: toggle,
                          onMouseLeave: childHandleLeave,
                          onMouseEnter: childHandleEnter
                        })
                      })}
                    </PoppersContainer>
                  )}
                </Popper>
              )}
            </div>
          </Manager>
        )
      }
    } else {
      return React.cloneElement(React.Children.only(item), {
        onClick: toggle,
        onMouseLeave: handleLeave,
        onMouseEnter: handleEnter
      })
    }
  }

  return (
    <StyledClickOutSide onClick={handleClickOutSide}>
      <Manager>
        <div className={className}>
          <Reference>
            {({ ref }) => (
              <TextContainer
                ref={ref}
                data-text={true}
                aria-expanded={isOpen}
                onClick={handleClick}
                onMouseLeave={handleLeave}
                onMouseEnter={handleEnter}
              >
                {text}
              </TextContainer>
            )}
          </Reference>
          {opened && (
            <Popper placement={placement}>
              {({ ref, style }) => (
                <PoppersContainer ref={ref} style={{ ...style }}>
                  {isControl
                    ? children
                    : React.Children.map(children, child => {
                      return getSubMenuOrItem(child)
                    })}
                </PoppersContainer>
              )}
            </Popper>
          )}
        </div>
      </Manager>
    </StyledClickOutSide>
  )
}

Dropdown.defaultProps = {
  trigger: 'hover',
  icon: 'angle-down',
  iconSize: 10,
  onToggle: () => {},
  mouseLeaveDelay: 300,
  childPlacement: 'right'
}

export default Dropdown
