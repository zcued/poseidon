import React from 'react'
import styled from 'styled-components'

const Flex = ({ children, type, direction, halign, flex, valign, ...rest }) =>
  React.createElement(
    type,
    {
      ...rest
    },
    children
  )

const StyledFlex = styled(Flex)`
  display: flex;
  flex-direction: ${props => props.direction};
  flex: ${props => props.flex};
  justify-content: ${props =>
    props.direction === 'row' ? props.halign : props.valign};
  align-items: ${props =>
    props.direction === 'row' ? props.valign : props.halign};
`

StyledFlex.defaultProps = {
  direction: 'column',
  halign: 'flex-start',
  valign: 'flex-start',
  flex: 'initial',
  type: 'div'
}

export default StyledFlex
