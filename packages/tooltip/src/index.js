import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Manager, Popper, Reference } from 'react-popper'
import theme from '@zcool/theme'
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
    font-size: ${T('font.size.sm')};
    color: ${T('palette.white')};
    padding: ${T('spacing.xs')}px;
    margin: ${T('spacing.xs')}px;
  }
`

function Tooltip(props) {
  const {
    placement,
    children,
    title,
    className,
    mouseEnterDelay,
    mouseLeaveDelay,
    defaultHovering,
    overlayStyle
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
    <ToolTipContainer
      theme={props.theme}
      className={className}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Manager>
        <Reference>
          {({ ref }) => (
            <div className="tooltip__reference" ref={ref}>
              {children}
            </div>
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
                data-placement={placement}
              >
                {title}
              </div>
            )}
          </Popper>
        ) : null}
      </Manager>
    </ToolTipContainer>
  )
}

Tooltip.displayName = 'Tooltip'

Tooltip.defaultProps = {
  theme,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0,
  defaultHovering: false,
  overlayStyle: {}
}

export default Tooltip
