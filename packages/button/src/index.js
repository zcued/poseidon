import styled from 'styled-components'
import theme from '@zcool/theme'

const Button = styled.button`
  outline: none;
  height: 36px;
  background: ${({ theme }) => theme.palette.white};
  border-color: ${({ theme }) => theme.palette.black};
`

Button.displayName = 'Button'

Button.defaultProps = {
  theme
}

export default Button
