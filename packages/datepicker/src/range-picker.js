import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DatePicker from './data-picker'
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
  width: 16px;
  height: 2px;
  background: ${theme.palette.black};
`

function RangePicker(props) {
  const {
    startPlaceholder,
    endPlaceholder,
    defaultValue,
    className,
    onChange
  } = props
  const [values, setValue] = useState({ from: null, to: null })

  useEffect(
    () => {
      onChange(values)
    },
    [values]
  )

  const changeDate = (value, type) => {
    setValue({
      ...values,
      ...{
        [type]: value
      }
    })
  }

  const { from } = values

  return (
    <DateRangeWrapper className={className}>
      <DatePicker
        placeholder={startPlaceholder}
        defaultValue={defaultValue ? defaultValue.from : null}
        onChange={e => changeDate(e, 'from')}
      />
      <SplitLine />
      <DatePicker
        placeholder={endPlaceholder}
        defaultValue={defaultValue ? defaultValue.to : null}
        onChange={e => changeDate(e, 'to')}
        disabledDates={from}
      />
    </DateRangeWrapper>
  )
}

export default RangePicker
