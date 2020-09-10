import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'
import Icon from '@zcool/icon'

export interface RadioProps {
  size?: number
  checked?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => boolean | void
  name?: string
  value?: string | number
  label?: React.ReactNode
  className?: string
}

function BaseRadio(props: RadioProps) {
  const { className, name, value, label, size, disabled, onChange } = props
  const [checked, setChecked] = useState(props.checked || false)

  useEffect(() => {
    setChecked(props.checked)
  }, [props.checked])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return false
    }
    
    if(onChange(e, !checked) === false) {
      return false
    }

    setChecked(!checked)
  }

  return (
    <label className={className}>
      <input
        type="radio"
        onChange={handleChange}
        disabled={disabled}
        name={name}
        value={value}
        checked={checked}
      />
      {checked ? (
        disabled ? (
          <Icon glyph="radio-checked-disabled" size={size} />
        ) : (
          <Icon glyph="radio-checked" size={size} />
        )
      ) : disabled ? (
        <Icon glyph="radio-disabled" size={size} />
      ) : (
        <Icon glyph="radio" size={size} />
      )}
      {label ? typeof label === 'string' ? <span>{label}</span> : label : null}
    </label>
  )
}

const Radio = styled(BaseRadio)`
  font-size: ${({ size }) => size}px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  * {
    vertical-align: middle;
  }

  input {
    display: none;
  }

  span {
    display: inline-block;
    margin-left: 8px;
  }
`

Radio.displayName = 'Radio'

Radio.defaultProps = {
  theme,
  size: 16,
  checked: false,
  disabled: false,
  onChange: () => {}
}

export default Radio
