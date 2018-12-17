import * as React from 'react'
import styled, { css } from 'styled-components'
import Flex from '@zcool/flex'
import { T } from '@zcool/util'

const Tabs = ({ children, align, ...rest }) => {
  return (
    <Flex {...rest} halign="start">
      {children}
    </Flex>
  )
}

const Tab = ({ children, selected, ...rest }) => (
  <Flex {...rest} halign="start">
    {children}
  </Flex>
)

export const StyledTabs = styled(Tabs)`
  align-self: stretch;
  margin: 0 ${T('spacing.lg')}px;
  margin-top: ${T('spacing.sm')}px;
  align-items: stretch;
  min-height: ${T('spacing.xl')}px;
  height: ${T('spacing.xl')}px;
`

export const StyledTab = styled(Tab)`
  margin: 0 ${T('spacing.md')}px;
  font-size: ${T('font.size.md')}px;
  color: ${T('palette.black')};
  cursor: pointer;
  position: relative;

  .icon {
    margin-right: 10px;
  }

  &:hover {
    color: ${T('palette.primary')};
  }

  ${props =>
    props.selected &&
    css`
      background-color: #fff;
      color: #ea4335;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 3px;
        height: 100%;
        background: #ea4335;
      }
      .icon {
        color: #ea4335;
      }
    `};

  ${props =>
    props.selected1 &&
    css`
      border-radius: 5px;
      background-color: #eee;
      color: #ea4335;
      font-weight: 500;
    `};
`
