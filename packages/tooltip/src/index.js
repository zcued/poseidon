import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Manager, Popper, Reference } from 'react-popper'
import { Portal } from 'react-portal'
import theme from '@zcool/theme'
import { T, zIndex } from '@zcool/util'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ToolTipPopper = styled.div`
  animation: 0.3s ${fadeIn} ease-out;
  background: ${T('palette.black60')};
  font-size: ${T('font.size.sm')}px;
  color: ${T('palette.white')};
  padding: ${T('spacing.xs')}px;
  margin: 10px;
  z-index: ${zIndex.tooltip};

  &[data-margin='true'] {
    margin: 18px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 8px solid transparent;
  }

  &[data-placement='top']::after {
    top: 100%;
    left: 50%;
    border-top-color: ${T('palette.black60')};
    transform: translateX(-50%);
  }

  &[data-placement='bottom']::after {
    top: -16px;
    left: 50%;
    border-bottom-color: ${T('palette.black60')};
    transform: translateX(-50%);
  }

  &[data-placement='left']::after {
    left: 100%;
    top: 50%;
    border-left-color: ${T('palette.black60')};
    transform: translateY(-50%);
  }

  &[data-placement='right']::after {
    top: 50%;
    left: -16px;
    border-right-color: ${T('palette.black60')};
    transform: translateY(-50%);
  }
`

ToolTipPopper.defaultProps = {
  theme
}

function Tooltip(props) {
  const {
    placement,
    children,
    title,
    mouseEnterDelay,
    mouseLeaveDelay,
    defaultHovering,
    overlayStyle,
    hasArrow
  } = props
  const [isHovering, setHovering] = useState(defaultHovering)

  let timer = null

  function handleEnter() {
    if (timer) clearTimeout(timer)
    if (!isHovering) {
      timer = setTimeout(() => {
        setHovering(true)
      }, mouseEnterDelay)
    }
  }

  function handleLeave() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      setHovering(false)
    }, mouseLeaveDelay)
  }

  function handlePopperClick() {
    setHovering(false)
  }

  return (
    <React.Fragment>
      <Manager>
        <Reference>
          {({ ref }) => (
            <span
              ref={ref}
              style={{ display: 'inline-block' }}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              {children}
            </span>
          )}
        </Reference>
        {isHovering ? (
          <Portal>
            <Popper positionFixed={true} placement={placement}>
              {({ ref, style }) => (
                <ToolTipPopper
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  onClick={handlePopperClick}
                  ref={ref}
                  style={{ ...style, ...overlayStyle }}
                  data-placement={hasArrow ? placement : null}
                  data-margin={hasArrow}
                >
                  {title}
                </ToolTipPopper>
              )}
            </Popper>
          </Portal>
        ) : null}
      </Manager>
    </React.Fragment>
  )
}

Tooltip.displayName = 'Tooltip'

Tooltip.defaultProps = {
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0,
  defaultHovering: false,
  overlayStyle: {},
  hasArrow: true
}

export default Tooltip
