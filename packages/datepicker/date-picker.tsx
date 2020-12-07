import React, { useState } from 'react'
import {
  StyledClickOutSide,
  PopperContainer,
  TextContainer
} from '@zcool/dropdown'
import Icon from '@zcool/icon'
import theme from '@zcool/theme'
import styled from 'styled-components'
import Calender, { DateValue } from './calender'
import { LocalProps } from './interface'

const Outside = styled(StyledClickOutSide)`
  position: relative;
  background-color: ${theme.palette.white};
  border: 1px solid ${theme.palette.daisy};
`

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 8px;
  height: 32px;
  cursor: pointer;

  [data-text] {
    min-width: 82px;
    margin-right: 8px;
    padding: 0;
    font-size: ${theme.font.size.sm}px;
    color: ${theme.palette.pewter};
    line-height: 20px;
    text-align: center;

    &.value {
      color: ${theme.palette.black3};
    }
  }
`

const PoppersContainerStyled = styled(PopperContainer)`
  position: absolute;
  margin: 0;
  margin-top: 8px;
  top: 100%;
  border-radius: 0;
  box-shadow: 0px 4px 16px ${theme.palette.black30};
  box-sizing: border-box;
  background-color: ${theme.palette.white};
`

export interface DatePickerProps {
  className?: string
  placeholder?: string
  defaultValue?: string
  value?: DateValue
  onChange: (date?: DateValue) => void
  disabledDatesOfEnd?: DateValue
  disabledDatesOfStart?: DateValue
  language?: 'zh' | 'en' | string
  locals?: {
    [localKey: string]: LocalProps
  }
  isIcon?: boolean
}

const defaultLocals = {
  en: {
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthsShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    nextMonth: 'Next month',
    nextYear: 'Next year',
    prevYear: 'Prev year',
    renderYear: year => year,
    prevMonth: 'Prev month',
    clear: 'Clear',
    today: 'Today'
  },
  zh: {
    daysShort: ['一', '二', '三', '四', '五', '六', '日'],
    monthsShort: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月'
    ],
    nextMonth: '下一月',
    nextYear: '下一年',
    prevYear: '上一年',
    renderYear: year => `${year}年`,
    prevMonth: '上一月',
    clear: '清空日期',
    today: '今天'
  }
}

export default function DatePicker(props: DatePickerProps) {
  const {
    className,
    placeholder = '请选择',
    defaultValue,
    onChange,
    disabledDatesOfEnd,
    disabledDatesOfStart,
    language = 'zh',
    locals = defaultLocals,
    isIcon = true
  } = props

  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState(props.value || getValue())
  const isControl = props.hasOwnProperty('value')
  const local = locals[language]

  if (isControl && props.value !== value) {
    setValue(props.value)
  }

  function getValue() {
    if (defaultValue) {
      const dateReg = /(\d{4}).+(\d{1,2}).+(\d{2})/
      const matchedDate = defaultValue.match(dateReg)

      if (!matchedDate) {
        throw new Error('日期格式错误，请使用 xxxx-xx-xx 格式')
      }

      return {
        year: +matchedDate[1],
        month: +matchedDate[2] - 1,
        day: +matchedDate[3]
      }
    }

    return null
  }

  function handleClickOutSide() {
    setOpen(false)
  }

  function handleClick() {
    setOpen(!isOpen)
  }

  const changeDate = (value: DateValue) => {
    setOpen(false)
    if (!isControl) {
      setValue(value)
    } else {
      onChange(value)
    }
  }

  const disabledDate = (value: DateValue) => {
    if (!disabledDatesOfStart && !disabledDatesOfEnd) {
      return false
    }

    const selectedDate = +new Date(
      `${value.year}/${value.month + 1}/${value.day} 00:00:00`
    )
    if (disabledDatesOfStart) {
      return (
        selectedDate -
          +new Date(
            `${disabledDatesOfStart.year}/${disabledDatesOfStart.month + 1}/${
              disabledDatesOfStart.day
            } 00:00:00`
          ) >
        0
      )
    }
    if (disabledDatesOfEnd) {
      return (
        selectedDate -
          +new Date(
            `${disabledDatesOfEnd.year}/${disabledDatesOfEnd.month + 1}/${
              disabledDatesOfEnd.day
            } 00:00:00`
          ) <
        0
      )
    }
  }

  return (
    <Outside className={className} onClick={handleClickOutSide}>
      <FlexCenter onClick={handleClick}>
        {value === null ? (
          <TextContainer data-text={true} aria-expanded={isOpen}>
            {placeholder}
          </TextContainer>
        ) : (
          <TextContainer
            data-text={true}
            className="value"
            aria-expanded={isOpen}
          >
            {value &&
              `${value.year}-${value.month + 1 < 10 ? '0' : ''}${value.month +
                1}-${value.day < 10 ? '0' : ''}${value.day}`}
          </TextContainer>
        )}
        {isIcon && <Icon size={16} glyph="date" />}
      </FlexCenter>
      {isOpen ? (
        <PoppersContainerStyled className="poppers__container">
          <Calender
            local={local}
            defaultValue={value}
            changeDate={changeDate}
            disabledDate={disabledDate}
          />
        </PoppersContainerStyled>
      ) : null}
    </Outside>
  )
}
