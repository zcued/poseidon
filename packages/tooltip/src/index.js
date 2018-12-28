import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Manager, Popper, Reference } from 'react-popper'
import { T } from '@zcool/util'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ToolTipContainer = styled.div`
  display: inline-block;

  .tooltip__reference {
    display: inline-block;
  }

  .tooltip__popper {
    animation: 0.3s ${fadeIn} ease-out;
    background: ${T('palette.black60')};
    font-size: ${T('font.size.sm')}px;
    color: ${T('palette.white')};
    padding: ${T('spacing.xs')}px;
    margin: 10px;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border: 8px solid transparent;
    }

    &[tip-placement='top']::after {
      top: 100%;
      left: 50%;
      border-top-color: ${T('palette.black60')};
      transform: translateX(-50%);
    }

    &[tip-placement='bottom']::after {
      top: -16px;
      left: 50%;
      border-bottom-color: ${T('palette.black60')};
      transform: translateX(-50%);
    }

    &[tip-placement='left']::after {
      left: 100%;
      top: 50%;
      border-left-color: ${T('palette.black60')};
      transform: translateY(-50%);
    }

    &[tip-placement='right']::after {
      top: 50%;
      left: -16px;
      border-right-color: ${T('palette.black60')};
      transform: translateY(-50%);
    }
  }
`

function Tooltip(props) {
  const {
    placement,
    children,
    title,
    mouseEnterDelay,
    mouseLeaveDelay,
    defaultHovering,
    overlayStyle,
    hasTip
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
          <Popper placement={placement}>
            {({ ref, style }) => (
              <div
                className="tooltip__popper"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onClick={handlePopperClick}
                ref={ref}
                style={{ ...style, ...overlayStyle }}
                tip-placement={hasTip ? placement : null}
              >
                {title}
              </div>
            )}
          </Popper>
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
  hasTip: true
}

export default Tooltip
