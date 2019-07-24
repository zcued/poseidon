import React, { useState } from 'react'
import {
  StyledClickOutSide,
  PopperContainer,
  TextContainer
} from '@zcool/dropdown'
import Calender, { DateValue } from './calender'
import Icon from '@zcool/icon'
import theme from '@zcool/theme'
import styled from 'styled-components'

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
}

export default function DatePicker(props: DatePickerProps) {
  const {
    className,
    placeholder,
    defaultValue,
    onChange,
    disabledDatesOfEnd,
    disabledDatesOfStart
  } = props

  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState(props.value || getValue())
  const isControl = props.hasOwnProperty('value')

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

    const selectedDate = +new Date(value.year, value.month + 1, value.day)
    if (disabledDatesOfStart) {
      return (
        selectedDate -
          +new Date(
            disabledDatesOfStart.year,
            disabledDatesOfStart.month + 1,
            disabledDatesOfStart.day
          ) >
        0
      )
    }
    if (disabledDatesOfEnd) {
      return (
        selectedDate -
          +new Date(
            disabledDatesOfEnd.year,
            disabledDatesOfEnd.month + 1,
            disabledDatesOfEnd.day
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
            {placeholder || '请选择'}
          </TextContainer>
        ) : (
          <TextContainer
            data-text={true}
            className="value"
            aria-expanded={isOpen}
          >
            {value &&
              `${value.year}-${
                value.month + 1 < 10 ? `0${value.month + 1}` : value.month + 1
              }-${value.day < 10 ? `0${value.day}` : value.day}`}
          </TextContainer>
        )}
        <Icon size={16} glyph="date" />
      </FlexCenter>
      {isOpen ? (
        <PoppersContainerStyled className="poppers__container">
          <Calender
            defaultValue={value}
            changeDate={changeDate}
            disabledDate={disabledDate}
          />
        </PoppersContainerStyled>
      ) : null}
    </Outside>
  )
}
