import React from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import theme from '@zcool/theme'
import { T, zIndex } from '@zcool/util'
import Icon from '@zcool/icon'
import Spinner from '@zcool/spinner'

const ModalContainer = styled.div`
  text-align: center;
  margin: auto;

  overflow-y: auto;
  overflow-x: hidden;

  svg {
    :hover {
      color: ${T('palette.primary')};
    }
  }

  .modal__close {
    display: flex;
    position: absolute;
    right: ${T('spacing.xs')}px;
    top: 4px;
    padding: ${T('spacing.sm')}px;
    cursor: pointer;

    &.loading {
      pointer-events: none;
    }
  }

  .modal__header {
    line-height: 56px;
    background: ${T('palette.pearl')};
    font-size: 18px;
    font-weight: ${T('font.weight.bold')};
    color: ${T('palette.black3')};
  }

  .modal__body {
    height: auto;
    padding: ${T('spacing.xl')}px;
  }

  .modal__footer {
    margin-bottom: ${T('spacing.xl')}px;
  }
`

export interface ModalProps {
  theme?: any
  width?: number
  height?: number | string
  title?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
  loading?: boolean
  loadingPositionTop?: number
}

function Modal(props: ModalProps & ReactModal.Props) {
  const MODAL_STYLES: ReactModal.Styles = {
    content: {
      margin: 'auto',
      width: 528,
      border: 0,
      padding: 0,
      borderRadius: 0,
      bottom: 'auto',
      minHeight: '10rem',
      left: '50%',
      position: 'fixed',
      right: 'auto',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      minWidth: '20rem',
      maxWidth: '60rem'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: zIndex.modal
    }
  }

  const {
    theme,
    width,
    height,
    title,
    footer,
    children,
    loading,
    loadingPositionTop,
    onRequestClose,
    style,
    ariaHideApp,
    shouldCloseOnEsc,
    shouldCloseOnOverlayClick,
    ...rest
  } = props

  if (style && style.content) {
    Object.assign(MODAL_STYLES.content, style.content)
  }

  if (style && style.overlay) {
    Object.assign(MODAL_STYLES.overlay, style.overlay)
  }

  if (width) {
    MODAL_STYLES.content.width = width
  }

  if (height) {
    MODAL_STYLES.content.height = height
  }

  return (
    <ReactModal
      ariaHideApp={ariaHideApp}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc={!loading && shouldCloseOnEsc}
      shouldCloseOnOverlayClick={!loading && shouldCloseOnOverlayClick}
      style={MODAL_STYLES}
      {...rest}
    >
      <ModalContainer theme={theme}>
        <span
          className={`modal__close ${loading ? 'loading' : ''}`}
          onClick={(e: any) => onRequestClose(e)}
          title="关闭"
        >
          <Icon glyph="close" />
        </span>
        {title ? <div className="modal__header">{title}</div> : null}
        <Spinner spinning={loading} top={loadingPositionTop}>
          <div className="modal__body">{children}</div>
          {footer ? <div className="modal__footer">{footer}</div> : null}
        </Spinner>
      </ModalContainer>
    </ReactModal>
  )
}

Modal.displayName = 'Modal'

Modal.defaultProps = {
  theme,
  loading: false,
  ariaHideApp: false,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true
}

export default Modal
