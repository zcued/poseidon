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

    case 'delete':
      return (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect
            fill="#333333"
            fillRule="nonzero"
            x="3"
            y="4.5"
            width="18"
            height="1.5"
            rx="0.75"
          />
          <path
            d="M9.45,5.1 C9.48970012,3.6849356 10.6492854,2.55 12.0739492,2.55 C13.4986129,2.55 14.6581982,3.6849356 14.6978984,5.1"
            stroke="#333333"
            strokeWidth="1.5"
            fillRule="nonzero"
          />
          <path
            d="M6.06973061,5.25 C6.05269688,5.25012897 6.05269688,5.25012897 6.03567486,5.25077359 C5.62188854,5.26958206 5.30169573,5.62026943 5.3205042,6.03405575 L5.93414056,19.5340557 C5.95234772,19.9346133 6.28239586,20.25 6.68336697,20.25 L17.316633,20.25 C17.7176041,20.25 18.0476523,19.9346133 18.0658594,19.5340557 L18.6794958,6.03405575 C18.6801404,6.01703373 18.6801404,6.01703373 18.6802694,6 C18.6802694,5.58578644 18.344483,5.25 17.9302694,5.25 L6.06973061,5.25 Z"
            id="矩形"
            stroke="#333333"
            strokeWidth="1.5"
            fillRule="nonzero"
          />
          <path
            d="M9.71365786,8.23421011 L9.75,17.25"
            id="路径-11"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            fillRule="nonzero"
          />
          <path
            d="M14.2136579,8.23421011 L14.25,17.25"
            id="路径-11-copy"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            fillRule="nonzero"
          />
        </g>
      )

    case 'attention':
      return (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            d="M6,12 C2.6862915,12 0,9.3137085 0,6 C0,2.6862915 2.6862915,0 6,0 C9.3137085,0 12,2.6862915 12,6 C12,9.3137085 9.3137085,12 6,12 Z M6,2 C5.44771525,2 5,2.44771525 5,3 L5,6 C5,6.55228475 5.44771525,7 6,7 C6.55228475,7 7,6.55228475 7,6 L7,3 C7,2.44771525 6.55228475,2 6,2 Z M6,8 C5.44771525,8 5,8.44771525 5,9 C5,9.55228475 5.44771525,10 6,10 C6.55228475,10 7,9.55228475 7,9 C7,8.44771525 6.55228475,8 6,8 Z"
            fill="#CCCCCC"
          />
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
