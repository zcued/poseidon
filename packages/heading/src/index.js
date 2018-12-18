import React from 'react'
import styled from 'styled-components'
import { T } from '@zcool/util'

const H = ({ size = 3, children, ...rest }) =>
  React.createElement(`h${size}`, { ...rest }, children)

const Heading = styled(H)`
  color: ${T('palette.black')};
  font-weight: ${T('font.weight.normal')};
  line-height: 1.4;
`

Heading.displayName = 'Heading'

export default Heading
