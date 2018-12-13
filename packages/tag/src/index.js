import styled from 'styled-components'
import { palette } from '@zcool/theme'

const Tag = styled.span`
  display: inline-block;
  padding: 8px 16px;
  background-color: ${palette.daisy};
  border-radius: 4px;
  color: ${palette.black};
  & + & {
    margin-left: 8px;
  }
`

export default Tag
