import styled from 'styled-components'
import theme from '@zcool/theme'
import { T } from '@zcool/util'

const Tag = styled.span`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${T('palette.daisy')};
  color: ${T('palette.black')};
  & + & {
    margin-left: 8px;
  }
`

Tag.displayName = 'Tag'

Tag.defaultProps = {
  theme
}

export default Tag
