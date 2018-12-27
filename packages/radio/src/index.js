import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'
import Icon from '@zcool/icon'

const Label = styled.label`
  cursor: ${props => `${props.disabled ? 'not-allowed' : 'pointer'}`};
`

function Radio({ size, disabled, onCheck, value }) {
  const [checked, setChecked] = useState(false)

  if (checked !== value) {
    setChecked(value)
  }

  if (value !== checked) {
    setChecked(value)
  }

  const handleChange = () => {
    if (disabled) {
      return false
    }
    setChecked(!checked)
    onCheck(!checked)
  }

  return (
    <div>
      <Label onClick={handleChange} disabled={disabled}>
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
      </Label>
    </div>
  )
}

Radio.displayName = 'Radio'

Radio.defaultProps = {
  theme,
  size: 16,
  disabled: false,
  value: false,
  onCheck: () => {}
}

export default Radio
