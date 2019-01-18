import React, { useState } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { Manager, Popper, Reference } from 'react-popper'
import Icon from '@zcool/icon'
import theme from '@zcool/theme'
import { T, zIndex } from '@zcool/util'
import ClickOutSide from './click-outside'

export const StyledClickOutSide = styled(ClickOutSide)`
  display: inline-block;
  background-color: transparent;
  position: relative;
  color: ${T('palette.black')};
`

export const TextContainer = styled.div`
  cursor: pointer;

  [data-icon='true'] {
    margin-left: 4px;
    vertical-align: -3px;
  }
`

export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

export const StyledPopper = styled(Popper)`
  opacity: 0;
  position: absolute;
  background-color: ${T('palette.white')};
  animation: ${fadeIn} 0.1s ease-in 0.1s forwards;
  z-index: 10;
  min-width: 100%;
`

export const PopperContainer = styled.div`
  margin: ${T('spacing.xs')}px;
  z-index: ${zIndex.dropdown};
  box-shadow: 0 2px 8px ${T('palette.black16')};
`

function Dropdown(props) {
  const {
    className,
    text,
    trigger,
    children,
    placement,
    icon,
    iconSize,
    onToggle,
    mouseLeaveDelay,
    modifiers
  } = props

  const [isOpen, setIsOpen] = useState(props.isOpen || false)
  const isControl = props.hasOwnProperty('isOpen')

  let timer = null

  if (isControl && props.isOpen !== isOpen) {
    setIsOpen(props.isOpen)
  }

  const handleClick = e => {
    if (trigger === 'click') {
      if (!isControl) {
        toggle(e)
      } else {
        onToggle(e)
      }
    }
  }

  const handleLeave = e => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      if (trigger === 'hover') {
        if (!isControl) {
          setIsOpen(false)
        } else {
          onToggle(e)
        }
      }
    }, mouseLeaveDelay)
  }

  const handleEnter = e => {
    if (timer) clearTimeout(timer)
    if (trigger === 'hover') {
      if (!isControl) {
        setIsOpen(true)
      } else {
        onToggle(e)
      }
    }
  }

  const handleClickOutSide = () => {
    if (!isControl) {
      setIsOpen(false)
    }
  }

  const toggle = (e, callback) => {
    if (callback) {
      callback(e)
    }

    const result = onToggle(e)

    if (result !== false) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <ThemeProvider theme={props.theme}>
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
                  {icon === 'none' ? null : (
                    <Icon glyph={icon} size={iconSize} />
                  )}
                </TextContainer>
              )}
            </Reference>
            {isOpen && (
              <StyledPopper placement={placement} modifiers={modifiers}>
                {({ ref, style }) => (
                  <PopperContainer
                    ref={ref}
                    style={{ ...style }}
                    onMouseLeave={handleLeave}
                    onMouseEnter={handleEnter}
                  >
                    {isControl
                      ? children
                      : React.Children.map(children, child => {
                        return React.cloneElement(
                          React.Children.only(child),
                          {
                            onClick: e => toggle(e, child.props.onClick)
                          }
                        )
                      })}
                  </PopperContainer>
                )}
              </StyledPopper>
            )}
          </div>
        </Manager>
      </StyledClickOutSide>
    </ThemeProvider>
  )
}

Dropdown.defaultProps = {
  theme,
  trigger: 'hover',
  icon: 'arrow-down',
  iconSize: 16,
  onToggle: () => {},
  mouseLeaveDelay: 300
}

export default Dropdown
