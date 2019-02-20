import styled from 'styled-components'
import {
  FlexDirectionProperty,
  JustifyContentProperty,
  AlignItemsProperty,
  FlexProperty,
  FlexWrapProperty
} from 'csstype'

export interface FlexProps {
  direction?: FlexDirectionProperty
  halign?: JustifyContentProperty
  valign: AlignItemsProperty
  flex: FlexProperty<number>
  wrap: FlexWrapProperty
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.direction};
  flex: ${props => props.flex};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props =>
    props.direction === 'row' ? props.halign : props.valign};
  align-items: ${props =>
    props.direction === 'row' ? props.valign : props.halign};
`

Flex.displayName = 'Flex'

Flex.defaultProps = {
  direction: 'row',
  halign: 'flex-start',
  valign: 'flex-start',
  flex: 'initial',
  wrap: 'initial'
}

export default Flex
