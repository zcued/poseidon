import React from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'

function BaseBadge({ className, children, count, dot }: BadgeProps) {
  return (
    <div className={className}>
      {children}
      <sup>{dot ? null : count}</sup>
    </div>
  )
}

export interface BadgeProps {
  offset?: Array<number>
  dot?: boolean
  className?: string
  children?: React.ReactNode
  count?: number | string
  visible?: boolean
}

const Badge = styled(BaseBadge)`
  display: inline-block;
  position: relative;

  sup {
    position: absolute;
    padding: 0 3px;
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
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

Badge.displayName = 'Badge'

Badge.defaultProps = {
  theme,
  visible: true,
  dot: false
}

export default Badge
