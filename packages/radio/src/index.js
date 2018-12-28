import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'
import Icon from '@zcool/icon'

function BaseRadio(props) {
  const { className, name, value, label, size, disabled, onChange } = props
  const [checked, setChecked] = useState(props.checked || false)

  useEffect(
    () => {
      setChecked(props.checked)
    },
    [props.checked]
  )

  const handleChange = e => {
    if (disabled) {
      return false
    }
    onChange(e, !checked)
    setChecked(!checked)
  }

  return (
    <label className={className} disabled={disabled}>
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

  &:hover {
    color: ${({ theme, disabled }) => (disabled ? '' : theme.palette.primary)};
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
