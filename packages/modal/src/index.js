import React from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import theme from '@zcool/theme'

const ModalContainer = styled.div`
  text-align: center;
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;

  .modal__close {
    display: flex;
    position: absolute;
    right: 8px;
    top: 4px;
    padding: 16px;
    cursor: pointer;
  }

  .modal__header {
    line-height: 56px;
    background: #f5f8fa;
  }

  .modal__body {
    height: auto;
  }

  .modal__footer {
    & > button {
      width: 128px;
      padding: 8px;
    }
  }
`

function Modal(props) {
  const MODAL_STYLES = {
    content: {
      width: 528,
      border: 'none',
      margin: 'auto',
      padding: 0,
      borderRadius: 0
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 5999
    }
  }

  const {
    width,
    height,
    title,
    footer,
    children,
    onRequestClose,
    style,
    ariaHideApp,
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
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      style={MODAL_STYLES}
      {...rest}
    >
      <ModalContainer>
        <span className="modal__close" onClick={onRequestClose}>
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill="none" d="M0 0h16v16H0z" />
              <path
                d="M7.99 7.99L1 1l6.99 6.99L1 14.98l6.99-6.99zm0 0L15 15 7.99 7.99 14.98 1 7.99 7.99z"
                stroke="#979797"
              />
            </g>
          </svg>
        </span>
        {title ? <div className="modal__header">{title}</div> : null}
        <div className="modal__body">{children}</div>
        {footer ? <div className="modal__footer">{footer}</div> : null}
      </ModalContainer>
    </ReactModal>
  )
}

Modal.displayName = 'Modal'

Modal.defaultProps = {
  theme,
  ariaHideApp: false,
  shouldCloseOnOverlayClick: false
}

export default Modal
