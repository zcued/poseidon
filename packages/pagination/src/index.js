import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '@zcool/theme'
import { T } from '@zcool/util'
import Icon from '@zcool/icon'
import Input from '@zcool/input'

export const JumperInput = styled(Input)`
  padding: 0;
  width: 64px;
  height: 100%;
  font-size: ${T('font.size.sm')}px;
  text-align: center;
  color: ${T('palette.black3')};
  border: none;
  border-radius: 5px;

  &:focus {
    box-shadow: none;
    outline: none;
  }
`

export const UL = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  margin: 0;
  font-size: ${T('font.size.sm')}px;

  > li {
    vertical-align: middle;

    &:last-child {
      color: ${T('palette.spruce')};
      letter-spacing: 0;
      text-align: center;
    }

    &[role] {
      cursor: pointer;
    }
  }
`

export const LI = styled.li`
  height: 24px;
  display: flex;
  align-items: center;

  & > button {
    cursor: inherit;
    border: none;
    outline: none;
    height: 100%;
    line-height: 1;
    background: transparent;
    padding: 0 ${T('spacing.xs')}px;

    &[disabled],
    &[disabled] [data-icon='true'] {
      color: ${T('palette.frost')};
      cursor: not-allowed;
    }
  }
`

export const Count = styled.span`
  color: ${T('palette.black')};
  margin: 0 4px;
`

function Pagination({
  theme,
  total,
  className,
  onChange = () => {},
  current,
  defaultCurrent
}) {
  const initialState = current || defaultCurrent || 1
  const [currentPage, setCurrentPage] = useState(initialState)
  const [currentInput, setCurrentInput] = useState(initialState)

  function handleChange(e) {
    const value = parseInt(e.target.value, 10)

    if (Number.isNaN(value) || value <= 0) {
      setCurrentInput('')
    } else {
      setCurrentInput(value)
    }
  }

  function handleBlur() {
    setCurrentInput(currentPage)
  }

  function handleKeyUp(e) {
    if (e.keyCode === 13) {
      let targetCurrent = currentInput
      if (targetCurrent > total) {
        targetCurrent = total
      }

      setCurrentPage(targetCurrent)
      setCurrentInput(targetCurrent)
      onChange(targetCurrent)
    }
  }

  function handleNext() {
    if (currentPage >= total) return

    const nextPage = currentPage + 1
    setCurrentPage(nextPage)
    setCurrentInput(nextPage)
    onChange(nextPage)
  }

  function handlePrev() {
    if (currentPage === 1) return

    const nextPage = currentPage - 1
    setCurrentPage(nextPage)
    setCurrentInput(nextPage)
    onChange(nextPage)
  }

  return (
    <ThemeProvider theme={theme}>
      <UL className={className}>
        <LI onClick={handlePrev} role="prev">
          <button disabled={currentPage <= 1}>
            <Icon glyph="arrow-left" />
          </button>
        </LI>
        <LI>
          <JumperInput
            type="text"
            onKeyUp={handleKeyUp}
            value={currentInput}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </LI>
        <LI onClick={handleNext} role="next">
          <button disabled={currentPage >= total}>
            <Icon glyph="arrow-right" />
          </button>
        </LI>
        <LI>
          总页数 <Count>{total}</Count> 页
        </LI>
      </UL>
    </ThemeProvider>
  )
}

Pagination.displayName = 'Pagination'

Pagination.defaultProps = {
  theme
}

export default Pagination
