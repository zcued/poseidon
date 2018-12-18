import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  flex: ${props => props.flex};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props =>
    props.direction === 'row' ? props.halign : props.valign};
  align-items: ${props =>
    props.direction === 'row' ? props.valign : props.halign};
`

Flex.defaultProps = {
  direction: 'row',
  halign: 'flex-start',
  valign: 'flex-start',
  flex: 'initial',
  wrap: 'initial'
}

Flex.displayName = 'Flex'

export default Flex
