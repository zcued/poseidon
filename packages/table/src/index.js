import React from 'react'
import styled from 'styled-components'

const TableWrapper = styled.table`
  width: 100%;
  text-align: left;
  border-spacing: 0;
`

const TableHead = styled.thead`
  background: #383838;
  font-size: 16px;
  color: #ffffff;
  font-weight: 300;
`

const TableBody = styled.tbody``

export const Row = styled.tr`
  &:nth-child(even) {
  }
`

export const Column = styled.td`
  padding: 14px 16px;
  box-sizing: border-box;
  text-align: center;
  &:last-child {
  }
`

const TableHeadColumn = styled(Column)`
  border-color: #2e3139;

  &:last-child {
    border-color: #2e3139;
  }
`

function Table({ col = [], data = [], ...rest }) {
  return (
    <TableWrapper {...rest}>
      <TableHead>
        <Row>
          {col.map((column, index) => (
            <TableHeadColumn as="th" key={column.key || index}>
              {column.title}
            </TableHeadColumn>
          ))}
        </Row>
      </TableHead>

      {data && data.length > 0 && (
        <TableBody>
          {data.map((item, index) => (
            <Row key={index}>
              {col.map((column, index) => (
                <Column key={column.key || index}>
                  {column.render
                    ? column.render(item[column.dataIndex], item, index)
                    : item[column.dataIndex]}
                </Column>
              ))}
            </Row>
          ))}
        </TableBody>
      )}
    </TableWrapper>
  )
}

Table.displayName = 'Table'

Table.defaultProps = {}

export default Table
