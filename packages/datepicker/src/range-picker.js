import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DatePicker from './date-picker'
import theme from '@zcool/theme'

const DateRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 238px;
  height: 32px;
  background-color: white;
  border: 1px solid ${theme.palette.black16};

  > div {
    border: none;

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
    startValue,
    endValue,
    startPlaceholder,
    endPlaceholder,
    defaultValue,
    className,
    onChange
  } = props
  const [values, setValue] = useState({ from: null, to: null })

  useEffect(() => {
    onChange(values)
  }, [values])

  const changeDate = (value, type) => {
    setValue({
      ...values,
      [type]: value
    })
  }

  const { from } = values

  return (
    <DateRangeWrapper className={className}>
      <DatePicker
        placeholder={startPlaceholder}
        value={startValue}
        defaultValue={defaultValue ? defaultValue.from : null}
        onChange={e => changeDate(e, 'from')}
      />
      <SplitLine />
      <DatePicker
        placeholder={endPlaceholder}
        value={endValue}
        defaultValue={defaultValue ? defaultValue.to : null}
        onChange={e => changeDate(e, 'to')}
        disabledDates={from}
      />
    </DateRangeWrapper>
  )
}

export default RangePicker
