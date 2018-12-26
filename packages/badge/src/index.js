import React from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'

function BaseBadge({ className, children, count, dot }) {
  return (
    <div className={className}>
      {children}
      <sup>{dot ? null : count}</sup>
    </div>
  )
}

const Badge = styled(BaseBadge)`
  display: inline-block;
  position: relative;

  sup {
    position: absolute;
    padding: 0 3px;
    top: ${({ offset }) =>
    Array.isArray(offset) && offset[0] ? `${offset[0]}px` : 0};
    right: ${({ offset }) =>
    Array.isArray(offset) && offset[1] ? `${0 - offset[1]}px` : 0};
    min-width: ${({ dot }) => (dot ? '8px' : '14px')};
    min-height: 8px;
    font-size: 10px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    line-height: 12px;
    color: ${({ theme }) => theme.palette.white};
    background: ${({ theme }) => theme.palette.primary};
    border: 1px solid ${({ theme }) => theme.palette.white};
    border-radius: 7px;
    box-sizing: border-box;
    transform: translateX(50%) translateY(-50%);
  }
`

Badge.display = 'Badge'

Badge.defaultProps = {
  theme,
  dot: false
}

export default Badge
