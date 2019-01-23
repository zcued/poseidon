import React, { useState, useEffect } from 'react'
import {
  StyledClickOutSide,
  PopperContainer,
  TextContainer
} from '@zcool/dropdown'
import Calender from './calender'
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
    margin-right: 8px;
    padding: 0;
    font-size: ${theme.font.size.sm}px;
    color: ${theme.palette.spruce};
    line-height: 20px;
    text-align: left;

    &.value {
      color: ${theme.palette.black};
    }
  }
`

const PoppersContainerStyled = styled(PopperContainer)`
  position: absolute;
  margin-top: 8px;
  top: 100%;
  border-radius: 0;
  box-shadow: 0px 4px 16px ${theme.palette.black30};
  box-sizing: border-box;
  background-color: ${theme.palette.white};
`

export default function DatePicker(props) {
  const {
    className,
    placeholder,
    defaultValue,
    onChange,
    disabledDates
  } = props

  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState(getValue())

  useEffect(() => {
    onChange(value)
  }, [isOpen, value])

  function getValue() {
    if (defaultValue) {
      const dateReg = /(\d{4}).+(\d{1,2}).+(\d{2})/
      const matchedDate = defaultValue.match(dateReg)

      if (!matchedDate) {
        throw new Error('defaultValue 格式错误，请使用 xxxx-xx-xx 格式')
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

  const changeDate = e => {
    setOpen(false)
    setValue(e)
  }

  const disabledDate = e => {
    if (!disabledDates) {
      return false
    }

    const selectedDate = +new Date(`${e.year}-${e.month + 1}-${e.day}`)

    return (
      selectedDate -
        +new Date(
          `${disabledDates.year}-${disabledDates.month + 1}-${
            disabledDates.day
          }`
        ) <
      0
    )
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
              `${
                value.month + 1 < 10 ? `0${value.month + 1}` : value.month + 1
              }-${value.day < 10 ? `0${value.day}` : value.day}`}
          </TextContainer>
        )}
        <Icon size={16} glyph="date" />
      </FlexCenter>
      {isOpen ? (
        <PoppersContainerStyled>
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
