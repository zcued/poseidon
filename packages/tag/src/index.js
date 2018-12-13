import styled from 'styled-components'
import theme from '@zcool/theme'

const Tag = styled.span`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.daisy};
  color: ${({ theme }) => theme.palette.black};
  & + & {
    margin-left: 8px;
  }
`

Tag.displayName = 'Tag'

Tag.defaultProps = {
  theme
}

export default Tag
