import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'
import Icon from '@zcool/icon'

function BaseCheckbox(props) {
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
        type="checkbox"
        onChange={handleChange}
        disabled={disabled}
        name={name}
        value={value}
        checked={checked}
      />
      {checked ? (
        disabled ? (
          <Icon glyph="checkbox-checked-disabled" size={size} />
        ) : (
          <Icon glyph="checkbox-checked" size={size} />
        )
      ) : disabled ? (
        <Icon glyph="checkbox-disabled" size={size} />
      ) : (
        <Icon glyph="checkbox" size={size} />
      )}
      {label ? typeof label === 'string' ? <span>{label}</span> : label : null}
    </label>
  )
}

const Checkbox = styled(BaseCheckbox)`
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

Checkbox.displayName = 'Checkbox'

Checkbox.defaultProps = {
  theme,
  size: 16,
  checked: false,
  disabled: false,
  onChange: () => {}
}

export default Checkbox
