import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'
// import { T } from '@zcool/util'
import Checked from './icon-checked'
import UnChecked from './icon-unchecked'
import DisableChecked from './icon-disable-checked'
import DisableUnChecked from './icon-disable-unchecked'

const Label = styled.label`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.width}px`};
  cursor: ${props => `${props.disable ? 'not-allowed' : 'pointer'}`};
  svg {
    width: ${props => `${props.width}px`};
    height: ${props => `${props.width}px`};
  }
`

function Checkbox({ width, disable, onCheck, value }) {
  const [checked, setchecked] = useState(value)

  const handleChange = () => {
    if (disable) {
      return false
    }
    onCheck(!checked)
    setchecked(!checked)
  }

  return (
    <div>
      <Label onClick={handleChange} width={width} disable={disable}>
        {checked ? (
          disable ? (
            <DisableChecked />
          ) : (
            <Checked />
          )
        ) : disable ? (
          <DisableUnChecked />
        ) : (
          <UnChecked />
        )}
      </Label>
    </div>
  )
}

Checkbox.displayName = 'Checkbox'

Checkbox.defaultProps = {
  theme,
  width: 16,
  // width: T('icon.size.md'),
  disable: false,
  onCheck: () => {},
  value: false
}

export default Checkbox
