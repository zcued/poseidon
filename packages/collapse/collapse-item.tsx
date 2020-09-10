import React from 'react'
import styled from 'styled-components'
import CollapseTransition from './collapse-transition'
import { palette } from '@zcool/theme'

export interface Props {
  title: string | JSX.Element
  isActive?: boolean
  onClick?: any
}

const CollapseItemTitile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${palette.black3};
  margin-top: 16px;

  span {
    user-select: none;
  }
`

const CollapseItem: React.SFC<Props> = ({
  title,
  isActive,
  onClick,
  children
}) => {
  return (
    <>
      <CollapseItemTitile
        className={isActive ? 'active' : ''}
        onClick={onClick}
      >
        <span>{title}</span>
      </CollapseItemTitile>
      <CollapseTransition isShow={isActive}>{children}</CollapseTransition>
    </>
  )
}

export default CollapseItem
