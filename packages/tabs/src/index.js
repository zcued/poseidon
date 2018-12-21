import React from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'
import { T } from '@zcool/util'
import Flex from '@zcool/flex'

const StyledTabs = ({ children, halign, ...rest }) => {
  return (
    <Flex halign={halign} {...rest}>
      {children}
    </Flex>
  )
}

export const Tabs = styled(StyledTabs)`
  border-bottom: 1px solid ${T('palette.daisy')};
  font-size: ${T('font.size.md')}px;
  font-weight: ${T('font.weight.bold')};
  color: ${T('palette.spruce')};
  line-height: 1.875;
`

Tabs.displayName = 'Tabs'

Tabs.defaultProps = {
  theme,
  halign: 'start'
}

export const Tab = styled.span.attrs({
  'data-selected': ({ selected }) => (selected ? 'true' : '')
})`
  display: inline-block;
  margin: 0 ${T('spacing.sm')}px;
  padding-bottom: 14px;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  transition: all 0.3s;

  &[data-selected='true'] {
    color: ${T('palette.black3')};
    border-bottom: 3px solid ${T('palette.primary')};
  }

  :hover {
    color: ${T('palette.primary')};
  }
`

Tab.displayName = 'Tab'

Tab.defaultProps = {
  theme,
  selected: false
}
