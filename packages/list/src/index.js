import styled from 'styled-components'
import { T } from '@zcool/util'

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: ${T('spacing.xs')}px 0;
`

export const ListItem = styled.li`
  text-align: center;
  white-space: nowrap;
  padding: ${T('spacing.xs')}px 0;
  overflow: hidden;

  &:hover {
    color: ${T('palette.primary')};
    background-color: ${T('palette.white')};
  }
`
