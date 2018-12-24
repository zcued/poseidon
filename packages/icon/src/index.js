import React from 'react'
import styled from 'styled-components'

export const Glyph = ({ glyph }) => {
  switch (glyph) {
    case 'radio':
      return (
        <g stroke="none" strokeWidth="1" fill="none">
          <circle stroke="#B9B9B9" fillRule="nonzero" cx="8" cy="8" r="7.5" />
        </g>
      )

    case 'radio-disabled':
      return (
        <g stroke="none" strokeWidth="1" fill="none">
          <g fill="#F0F0F0" fillRule="nonzero" stroke="#D9D9D9">
            <circle cx="8" cy="8" r="7.5" />
          </g>
        </g>
      )

    case 'radio-checked':
      return (
        <g stroke="none" strokeWidth="1" fill="none">
          <circle stroke="#999999" fillRule="nonzero" cx="8" cy="8" r="7.5" />
          <circle fill="#EB5549" fillRule="nonzero" cx="8" cy="8" r="4" />
        </g>
      )

    case 'radio-checked-disabled':
      return (
        <g stroke="none" strokeWidth="1" fill="none">
          <g fillRule="nonzero">
            <circle stroke="#D9D9D9" fill="#F0F0F0" cx="8" cy="8" r="7.5" />
            <circle fill="#D0D0D0" cx="8" cy="8" r="4" />
          </g>
        </g>
      )

    case 'checkbox':
      return (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect
            stroke="#B9B9B9"
            strokeWidth="2"
            x="3"
            y="3"
            width="10"
            height="10"
          />
        </g>
      )

    case 'checkbox-disabled':
      return (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect
            id="checkbox"
            stroke="#EEEEEE"
            strokeWidth="2"
            fill="#F9F9F9"
            x="3"
            y="3"
            width="10"
            height="10"
          />
        </g>
      )

    case 'checkbox-checked':
      return (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect fill="#EA4335" x="2" y="2" width="12" height="12" />
          <polyline
            stroke="#FFFFFF"
            strokeWidth="2"
            fillRule="nonzero"
            points="4 7.07724649 7.37427568 10.2091602 12.0400412 5"
          />
        </g>
      )

    case 'checkbox-checked-disabled':
      return (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect fill="#EEEEEE" x="2" y="2" width="12" height="12" />
          <polyline
            stroke="#B9B9B9"
            strokeWidth="2"
            fillRule="nonzero"
            points="4 7.07724649 7.37427568 10.2091602 12.0400412 5"
          />
        </g>
      )

    case 'close':
      return (
        <g fill="none" fillRule="evenodd">
          <path fill="none" d="M0 0h16v16H0z" />
          <path
            d="M7.99 7.99L1 1l6.99 6.99L1 14.98l6.99-6.99zm0 0L15 15 7.99 7.99 14.98 1 7.99 7.99z"
            stroke="#979797"
          />
        </g>
      )

    case 'arrow-left':
      return (
        <g fillRule="evenodd">
          <path d="M5.529 7.195l3.666-4.333c.367-.433 1-.467 1.4-.133.434.366.467 1 .134 1.4l-3.134 3.7 3.134 3.7a.97.97 0 0 1-.134 1.4.97.97 0 0 1-1.4-.134L5.53 8.462c-.167-.167-.234-.4-.234-.633 0-.234.067-.467.234-.634z" />
        </g>
      )

    case 'arrow-right':
      return (
        <g fillRule="evenodd">
          <path d="M10.833 8c0 .233-.066.467-.233.633l-3.667 4.334c-.366.433-1 .466-1.4.133-.433-.367-.466-1-.133-1.4L8.533 8 5.4 4.3a.97.97 0 0 1 .133-1.4.97.97 0 0 1 1.4.133L10.6 7.367c.167.166.233.4.233.633z" />
        </g>
      )

    default:
      return null
  }
}

const computedSize = ({ size }) => `${size || 16}px`

export const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`

const SvgWrapper = styled.div`
  display: inline-block;
  flex: 0 0 ${computedSize};
  width: ${computedSize};
  height: ${computedSize};
  min-width: ${computedSize};
  min-height: ${computedSize};
  position: relative;
  color: inherit;
  vertical-align: middle;
`

const Icon = ({ glyph, size, ...rest }) => (
  <SvgWrapper data-icon={true} size={size} {...rest}>
    <InlineSvg
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      id={glyph}
    >
      <Glyph glyph={glyph} />
    </InlineSvg>
  </SvgWrapper>
)

export default Icon
