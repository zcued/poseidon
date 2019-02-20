import styled from 'styled-components'
import theme from '@zcool/theme'
import { T } from '@zcool/util'

const Input = styled.input.attrs({
  type: 'text'
})`
  padding: 0 ${T('spacing.sm')}px;
  width: 100%;
  height: 32px;
  font-size: ${T('font.size.sm')}px;
  color: ${T('palette.black')};
  background: ${T('palette.white')};
  border: 1px solid ${T('palette.black16')};
  box-sizing: border-box;
  cursor: ${({ readOnly }) => (readOnly ? 'not-allowed' : 'auto')};
  transition: border-color 0.25s, box-shadow 0.25s;

  &::-webkit-input-placeholder {
    color: ${T('palette.stone')};
  }

  &:focus {
    border-color: ${T('palette.black30')};
    outline: none;
  }

  &[data-error='true'] {
    border-width: 2px;
    border-color: ${T('palette.primary')};
    box-shadow: 0 2px 6px 0 ${T('palette.black16')};
    outline: none;
  }
`

Input.displayName = 'Input'

Input.defaultProps = {
  theme
}

export default Input
