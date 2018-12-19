import styled from 'styled-components'
import theme from '@zcool/theme'
import { T } from '@zcool/util'

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: ${T('spacing.xs')}px 0;
`

List.displayName = 'List'

List.defaultProps = {
  theme
}

export const ListItem = styled.li`
  text-align: center;
  list-style: none;
  white-space: nowrap;
  padding: ${T('spacing.xs')}px 0;
  overflow: hidden;

  &:hover {
    color: ${T('palette.white')};
    background-color: ${T('palette.primary')};
  }
`

ListItem.displayName = 'ListItem'

ListItem.defaultProps = {
  theme
}
