import React from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'
import { T } from '@zcool/util'

const TableContainer = styled.table`
  width: 100%;
  text-align: ${T('font.align')};
  border-spacing: 0;

  thead {
    background: ${T('palette.black2')};
    font-size: ${T('font.title.size.sm')}px;
    color: ${T('palette.white')};
    opacity: 0.8;
  }

  tbody {
    border-left: 2px solid ${T('palette.daisy')};
    border-right: 2px solid ${T('palette.daisy')};

    tr {
      border-bottom: 2px solid #f0f4f5;
    }
  }

  th,
  td {
    box-sizing: border-box;
    text-align: center;
  }

  td {
    padding: 14px 16px;
  }

  th {
    line-height: 56px;
  }
`

function Table({ col, data, ...rest }) {
  return (
    <TableContainer {...rest}>
      <thead>
        <tr>
          {col.map((column, index) => (
            <th
              key={column.key || index}
              style={{ width: column.width || 'auto' }}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>

      {data && data.length > 0 && (
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {col.map((column, i) => (
                <td
                  key={column.key || i}
                  style={{ width: column.width || 'auto' }}
                >
                  {column.render
                    ? column.render(item[column.dataIndex], item, i)
                    : item[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </TableContainer>
  )
}

Table.displayName = 'Table'

Table.defaultProps = {
  theme,
  col: [],
  data: []
}

export default Table
