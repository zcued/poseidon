import styled from 'styled-components'
import theme from '@zcool/theme'
import { T } from '@zcool/util'

export interface TagProps {
  bgColor: string
}

const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: ${T('spacing.xs')}px ${T('spacing.sm')}px;
  border-radius: 4px;
  background-color: ${({ bgColor, theme }) =>
    theme.palette[bgColor] || bgColor || theme.palette.white};
  color: ${T('palette.spruce')};
  font-size: ${T('font.size.md')}px;
  cursor: pointer;

  & + & {
    margin-left: ${T('spacing.sm')}px;
  }

  &:hover {
    color: ${T('palette.primary')};
  }
`

Tag.displayName = 'Tag'

Tag.defaultProps = {
  theme
}

export default Tag
