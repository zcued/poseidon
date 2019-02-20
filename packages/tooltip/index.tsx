import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Manager, Popper, Reference } from 'react-popper'
import PopperJS from 'popper.js'
import { Portal } from 'react-portal'
import theme from '@zcool/theme'
import { T, zIndex } from '@zcool/util'

export const fadeIn = keyframes`
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

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 4px solid transparent;
  }

  &[data-placement='top']::after {
    top: 100%;
    left: 50%;
    border-top-color: ${T('palette.black60')};
    transform: translateX(-50%);
  }

  &[data-placement='bottom']::after {
    top: -8px;
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
    left: -8px;
    border-right-color: ${T('palette.black60')};
    transform: translateY(-50%);
  }
`

ToolTipPopper.defaultProps = {
  theme
}

export interface Props {
  placement?: PopperJS.Placement
  children: React.ReactNode
  title: React.ReactNode
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  defaultHovering?: boolean
  overlayStyle?: React.CSSProperties
  hasArrow: boolean
  modifiers?: PopperJS.Modifiers
}

function Tooltip(props: Props) {
  const {
    placement,
    children,
    title,
    mouseEnterDelay,
    mouseLeaveDelay,
    defaultHovering,
    overlayStyle,
    hasArrow,
    modifiers
  } = props
  const [isHovering, setHovering] = useState(defaultHovering)

  let timer = null

  function handleEnter(e) {
    e.stopPropagation()

    if (timer) clearTimeout(timer)
    if (!isHovering) {
      timer = setTimeout(() => {
        setHovering(true)
      }, mouseEnterDelay)
    }
  }

  function handleLeave(e) {
    e.stopPropagation()

    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      setHovering(false)
    }, mouseLeaveDelay)
  }

  function handlePopperClick() {
    setHovering(false)
  }

  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <span
            ref={ref}
            className="tooltip__reference"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            {children}
          </span>
        )}
      </Reference>
      {isHovering ? (
        <Portal>
          <Popper
            positionFixed={true}
            placement={placement}
            modifiers={modifiers}
          >
            {({ ref, style }) => (
              <ToolTipPopper
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onClick={handlePopperClick}
                ref={ref}
                style={{ ...style, ...overlayStyle }}
                data-placement={hasArrow ? placement : null}
              >
                {title}
              </ToolTipPopper>
            )}
          </Popper>
        </Portal>
      ) : null}
    </Manager>
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
