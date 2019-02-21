import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'
import Icon from '@zcool/icon'

export interface CheckboxProps {
  className?: string
  name: string
  value: string
  label: React.ReactNode
  size?: number
  disabled?: boolean
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

function BaseCheckbox({
  className,
  name,
  value,
  label,
  size,
  disabled,
  checked,
  onChange
}: CheckboxProps) {
  const [checkedState, setChecked] = useState(checked || false)

  useEffect(
    () => {
      setChecked(checked)
    },
    [checked]
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return false
    }
    onChange(e, !checkedState)
    setChecked(!checkedState)
  }

  return (
    <label className={className}>
      <input
        type="checkbox"
        onChange={handleChange}
        disabled={disabled}
        name={name}
        value={value}
        checked={checkedState}
      />
      {checkedState ? (
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
