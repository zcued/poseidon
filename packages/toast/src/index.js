import styled from 'styled-components'
import theme from '@zcool/theme'
import { T } from '@zcool/util'

const Toast = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  margin: auto;
  padding: 10px 40px;
  max-width: 528px;
  font-size: 18px;
  font-weight: ${T('font.weight.medium')};
  color: ${T('palette.white')};
  line-height: 28px;
  text-align: center;
  background: ${T('palette.black60')};
  border-radius: 4px;
  pointer-events: none;
  z-index: 999;
  overflow: hidden;
`

Toast.displayName = 'Toast'

Toast.defaultProps = {
  theme
}

export default Toast
