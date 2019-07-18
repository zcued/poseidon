import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from '@zcool/icon'
import theme from '@zcool/theme'
import { StyledClickOutSide } from '@zcool/dropdown'

const Wrap = styled.div`
  position: relative;
`

const Container = styled.div`
  width: 112px;
  height: 192px;
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 16px ${theme.palette.black30};
  box-sizing: border-box;
  background-color: ${theme.palette.white};
`

const ColumnFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Item = styled.div<{ isCurrent: boolean }>`
  width: 56px;
  height: 32px;
  cursor: pointer;
  color: ${({ isCurrent }) =>
    isCurrent ? theme.palette.white : theme.palette.black3};
  background-color: ${({ isCurrent }) =>
    isCurrent ? theme.palette.primary : theme.palette.white};
  line-height: 32px;
  text-align: center;

  :hover {
    background-color: ${({ isCurrent }) =>
      isCurrent ? theme.palette.primary : 'rgba(234, 67, 53, 0.2)'};
  }
`

const IconGroup = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    color: ${theme.palette.spruce};
    :hover {
      color: ${theme.palette.primary};
    }
  }
`

const Title = styled.div`
  font-size: ${theme.font.size.md}px;
  font-weight: ${theme.font.weight.bold};
  color: #282828;
  line-height: 26px;

  > span {
    cursor: pointer;
  }

  > span + span {
    margin-left: 16px;
  }
`
interface Props {
  currentYear: number
  currentMonth: number
  onChangeYear: (y: number) => void
  onChangeMonth: (m: number) => void
}

export default function DateDropdown(props: Props) {
  const { currentYear, currentMonth, onChangeYear, onChangeMonth } = props
  const [showYearDropdown, setShowYearDropdown] = useState(false)
  const [showMonthDropdown, setShowMonthDropdown] = useState(false)

  function toggleYearDropdown() {
    setShowMonthDropdown(false)
    setShowYearDropdown(!showYearDropdown)
  }

  function toggleMonthDropdown() {
    setShowYearDropdown(false)
    setShowMonthDropdown(!showMonthDropdown)
  }

  function changeYear(y: number) {
    setShowYearDropdown(false)
    onChangeYear(y)
  }

  function changeMonth(m: number) {
    setShowMonthDropdown(false)
    onChangeMonth(m)
  }

  function handleClickOutSide() {
    setShowMonthDropdown(false)
    setShowYearDropdown(false)
  }

  return (
    <StyledClickOutSide onClick={handleClickOutSide}>
      <Wrap>
        <Title>
          <span
            style={{ color: showYearDropdown ? theme.palette.primary : null }}
            onClick={toggleYearDropdown}
          >
            {currentYear}
            <span>年</span>
          </span>
          <span
            style={{ color: showMonthDropdown ? theme.palette.primary : null }}
            onClick={toggleMonthDropdown}
          >
            {currentMonth + 1 < 10 ? `0${currentMonth + 1}` : currentMonth + 1}
            <span>月</span>
          </span>
        </Title>
        {showYearDropdown && (
          <YearDropdown
            year={currentYear}
            onChangeYear={changeYear}
            hide={() => setShowYearDropdown(false)}
          />
        )}
        {showMonthDropdown && (
          <MonthDropdown month={currentMonth} onChangeMonth={changeMonth} />
        )}
      </Wrap>
    </StyledClickOutSide>
  )
}

function MonthDropdown(props: {
  month: number
  onChangeMonth: (m: number) => void
}) {
  const { month, onChangeMonth } = props
  const months = Array.from(new Array(12), (_, index) => index)

  function handleChange(m: number) {
    onChangeMonth(m)
  }

  return (
    <Container>
      <ColumnFlex>
        {months.map(m => (
          <Item key={m} isCurrent={m === month} onClick={() => handleChange(m)}>
            {m + 1}月
          </Item>
        ))}
      </ColumnFlex>
    </Container>
  )
}

function YearDropdown(props: {
  year: number
  hide: Function
  onChangeYear: (y: number) => void
}) {
  const { year, onChangeYear, hide } = props
  const years = Array.from(new Array(10), (_, index) => year - 5 + index)
  const [currentTenYears, setCurrentTenYears] = useState(years)

  function handleChange(y: number) {
    onChangeYear(y)
  }

  function changeYears(type: string) {
    const diff = type === 'add' ? 10 : -10
    const newYears = currentTenYears.map(item => item + diff)
    setCurrentTenYears(newYears)
  }

  return (
    <Container>
      <ColumnFlex style={{ height: 160 }}>
        {currentTenYears.map(y => (
          <Item key={y} isCurrent={y === year} onClick={() => handleChange(y)}>
            {y}
          </Item>
        ))}
      </ColumnFlex>
      <IconGroup>
        <Icon
          glyph="boult-left"
          size={16}
          onClick={() => changeYears('reduce')}
        />
        <Icon glyph="date-close" size={16} onClick={() => hide()} />
        <Icon
          glyph="boult-right"
          size={16}
          onClick={() => changeYears('add')}
        />
      </IconGroup>
    </Container>
  )
}
