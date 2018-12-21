import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'
import Icon from '@zcool/icon'

const Label = styled.label`
  cursor: ${props => `${props.disable ? 'not-allowed' : 'pointer'}`};
`

function Radio({ width, disable, onCheck, value }) {
  const [checked, setChecked] = useState(value)

  const handleChange = () => {
    if (disable) {
      return false
    }
    onCheck(!checked)
    setChecked(!checked)
  }

  return (
    <div>
      <Label onClick={handleChange} disable={disable}>
        {checked ? (
          disable ? (
            <Icon glyph="radio-checked-disabled" size={width} />
          ) : (
            <Icon glyph="radio-checked" size={width} />
          )
        ) : disable ? (
          <Icon glyph="radio-disabled" size={width} />
        ) : (
          <Icon glyph="radio" size={width} />
        )}
      </Label>
    </div>
  )
}

Radio.displayName = 'Radio'

Radio.defaultProps = {
  theme,
  width: 16,
  disable: false,
  onCheck: () => {},
  value: false
}

export default Radio
