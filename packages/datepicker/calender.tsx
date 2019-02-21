import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from '@zcool/icon'
import theme from '@zcool/theme'

const Wrapper = styled.div`
  padding: 16px;
`

const CalenderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  [data-icon='true'] {
    cursor: pointer;
  }
`

const CalenderHeaderBox = styled.div`
  display: flex;
  align-items: center;
`

const CalenderHeaderLeft = styled(CalenderHeaderBox)`
  div[data-icon='true']:nth-child(2) {
    margin: 0 0 0 16px;
  }
`

const CalenderHeaderRight = styled(CalenderHeaderBox)`
  div[data-icon='true']:nth-child(2) {
    margin: 0 0 0 16px;
  }
`

const Title = styled.div`
  font-size: ${theme.font.size.md}px;
  font-weight: ${theme.font.weight.bold};
  color: #282828;
  line-height: 26px;

  span {
    margin-right: 12px;
  }
`

const CalenderBody = styled.div`
  margin-top: 16px;
`

const Table = styled.table`
  font-size: ${theme.font.size.sm}px;

  thead {
    color: ${theme.palette.stone};

    th {
      width: 32px;
      padding-bottom: 8px;
      font-weight: ${theme.font.weight.normal};
      text-align: center;
    }
  }

  td {
    padding: 0;
    text-align: center;
    outline: none;
    border: 0;
  }
`

const Cell = styled.button`
  display: inline-block;
  padding: 0;
  width: 32px;
  height: 32px;
  line-height: 32px;
  background: transparent;
  outline: none;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${theme.palette.primary};
  }

  &.selected {
    background: ${theme.palette.primary};
    color: ${theme.palette.white};
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    background: transparent;
    color: ${theme.palette.frost};
    cursor: not-allowed;
  }
`

const CalenderFooter = styled.div`
  padding-top: 8px;
  font-size: 14px;
`

const ClearDate = styled.span`
  color: ${theme.palette.spruce};
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${theme.palette.primary};
  }
`

const weekDayNames = ['一', '二', '三', '四', '五', '六', '日']

export interface DateValue {
  year: number
  month: number
  day: number
}

export interface CalenderProps {
  defaultValue?: DateValue
  changeDate: (date?: DateValue) => void
  disabledDate?: Function
}

function Calender(props: CalenderProps) {
  const { defaultValue, changeDate, disabledDate } = props

  const [year, setYear] = useState(getDefaultValue('year', null))
  const [month, setMonth] = useState(getDefaultValue('month', null))
  const [day, setDay] = useState(getDefaultValue('day', null))
  const [currentYear, setCurrentYear] = useState(
    getDefaultValue('year', new Date().getFullYear())
  )
  const [currentMonth, setCurrentMonth] = useState(
    getDefaultValue('month', new Date().getMonth())
  )

  function getDefaultValue(key: string, value: any) {
    return defaultValue ? defaultValue[key] : value
  }

  // 当前月各天的时间状态
  function getDates() {
    // const { currentYear, currentMonth } = state
    const dates = []
    let d

    // 上月
    d = new Date(currentYear, currentMonth, 1)
    const dayInWeek = d.getDay() || 7

    if (dayInWeek > 1) {
      d.setDate(0)
      const lastMonthDaysCount = d.getDate()

      for (let i = dayInWeek - 1; i--; ) {
        dates.push({
          year: d.getFullYear(),
          month: d.getMonth(),
          day: lastMonthDaysCount - i,
          notThisMonth: true
        })
      }
    }

    // 本月
    d = new Date(currentYear, currentMonth + 1, 0)
    const thisMonthDaysCount = d.getDate()

    for (let i = 0; i < thisMonthDaysCount; i++) {
      dates.push({
        year: d.getFullYear(),
        month: d.getMonth(),
        day: i + 1
      })
    }

    // 下月
    d = new Date(currentYear, currentMonth + 1, 1)
    const _len = dates.length

    for (let i = 0, len = (_len <= 35 ? 35 : 42) - _len; i < len; i++) {
      dates.push({
        year: d.getFullYear(),
        month: d.getMonth(),
        day: i + 1,
        notThisMonth: true
      })
    }

    return dates
  }

  function handleDaySelect(date?: any) {
    if (date) {
      const { year, month, day } = date
      setYear(year)
      setMonth(month)
      setDay(day)
      setCurrentYear(year)
      setCurrentMonth(month)

      changeDate({
        year,
        month,
        day
      })
    } else {
      changeDate(null)
    }
  }

  function changeDates(change: number, type?: string) {
    const d = new Date(currentYear, currentMonth)

    if (type === 'year') {
      d.setFullYear(d.getFullYear() + change)
      setCurrentYear(d.getFullYear())
    } else {
      d.setMonth(d.getMonth() + change)
      setCurrentYear(d.getFullYear())
      setCurrentMonth(d.getMonth())
    }
  }

  function renderCalender(dates: any[]) {
    const chunks = []

    for (let i = 0; i < dates.length; i += 1) {
      if (i % 7 === 0) chunks.push([])

      chunks[Math.floor(i / 7)].push(dates[i])
    }

    return (
      <React.Fragment>
        {chunks.map((item, index) => (
          <tr key={index}>
            {item.map((date, i) => (
              <td key={i}>
                {date.notThisMonth ? null : (
                  <Cell
                    disabled={disabledDate(date)}
                    className={
                      year === date.year &&
                      month === date.month &&
                      day === date.day &&
                      'selected'
                    }
                    onClick={handleDaySelect.bind(this, date)}
                  >
                    {date.day}
                  </Cell>
                )}
              </td>
            ))}
          </tr>
        ))}
      </React.Fragment>
    )
  }

  const dates = getDates()

  return (
    <Wrapper>
      <CalenderHeader>
        <CalenderHeaderLeft>
          <Icon
            glyph="arrow-left-collapse"
            size={16}
            onClick={changeDates.bind(this, -1, 'year')}
          />
          <Icon
            glyph="angle-left"
            size={16}
            onClick={changeDates.bind(this, -1)}
          />
        </CalenderHeaderLeft>
        <div>
          <Title>
            {currentYear}
            <span>年</span>
            {currentMonth + 1 < 10 ? `0${currentMonth + 1}` : currentMonth + 1}
            月
          </Title>
        </div>
        <CalenderHeaderRight>
          <Icon
            size={16}
            glyph="angle-right"
            onClick={changeDates.bind(this, 1)}
          />
          <Icon
            size={16}
            glyph="arrow-right-collapse"
            onClick={changeDates.bind(this, 1, 'year')}
          />
        </CalenderHeaderRight>
      </CalenderHeader>
      <CalenderBody>
        <Table>
          <thead>
            <tr>
              {weekDayNames.map((name, i) => (
                <th key={i}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>{renderCalender(dates)}</tbody>
        </Table>
      </CalenderBody>
      <CalenderFooter>
        <ClearDate onClick={() => handleDaySelect(null)}>清空日期</ClearDate>
      </CalenderFooter>
    </Wrapper>
  )
}

export default Calender

Calender.defaultProps = {
  disabledDate: () => {}
}
