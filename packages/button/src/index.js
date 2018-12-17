import styled from 'styled-components'
import theme from '@zcool/theme'
import { T } from '@zcool/util'

const Button = styled.button`
  outline: none;
  height: 36px;
  background: ${T('palette.white')};
  border-color: ${T('palette.black')};
`

Button.displayName = 'Button'

Button.defaultProps = {
  theme
}

export default Button
