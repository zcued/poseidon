import React from 'react'
import styled from 'styled-components'
import DatePicker from './date-picker'
import theme from '@zcool/theme'

const DateRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 253px;
  height: 32px;
  background-color: ${theme.palette.white};
  border: 1px solid #ccc;
  border-radius: 4px;

  > div {
    border: none;
    background-color: transparent;

    &:first-child,
    &:last-child {
      height: 30px;
    }
  }
`

const SplitLine = styled.div`
  width: 9px;
  height: 1px;
  background-color: ${theme.palette.pewter};
`

function RangePicker(props) {
  const {
    startPlaceholder,
    endPlaceholder,
    value,
    defaultValue,
    className,
    onChange
  } = props

  const changeDate = (v, type) => {
    value[type] = v
    onChange(value)
  }

  const { from, to } = value

  return (
    <DateRangeWrapper className={className}>
      <DatePicker
        placeholder={startPlaceholder}
        defaultValue={defaultValue ? defaultValue.from : null}
        value={value ? value.from : null}
        onChange={e => changeDate(e, 'from')}
        disabledDatesOfStart={to}
      />
      <SplitLine />
      <DatePicker
        placeholder={endPlaceholder}
        defaultValue={defaultValue ? defaultValue.to : null}
        value={value ? value.to : null}
        onChange={e => changeDate(e, 'to')}
        disabledDatesOfEnd={from}
      />
    </DateRangeWrapper>
  )
}

export default RangePicker
