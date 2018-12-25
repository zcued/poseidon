import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'
// import { T } from '@zcool/util'
import Icon from '@zcool/icon'

const Label = styled.label`
  cursor: ${props => `${props.disable ? 'not-allowed' : 'pointer'}`};
`

function Checkbox({ size, disabled, onCheck, value }) {
  const [checked, setChecked] = useState(value)

  if (value !== checked) {
    setChecked(value)
  }

  const handleChange = () => {
    if (disabled) {
      return false
    }
    onCheck(!checked)
    setChecked(!checked)
  }

  return (
    <div>
      <Label onClick={handleChange} disable={disabled}>
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
      </Label>
    </div>
  )
}

Checkbox.displayName = 'Checkbox'

Checkbox.defaultProps = {
  theme,
  size: 16,
  // width: T('icon.size.md'),
  disabled: false,
  value: false,
  onCheck: () => {}
}

export default Checkbox
