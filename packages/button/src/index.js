import React from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'
import Spinner from '@zcool/spinner'

const type = {
  default: {
    color: theme.palette.primary,
    background: theme.palette.white,
    borderColor: theme.palette.primary,
    hoverColor: '#d6372a',
    hoverBackground: theme.palette.white,
    hoverBorderColor: '#d6372a',
    activeColor: '#bc3024',
    activeBackground: theme.palette.white,
    activeBorderColor: '#bc3024',
    disabledColor: theme.palette.frost,
    disabledBackground: theme.palette.white,
    disabledBorderColor: theme.palette.frost
  },
  primary: {
    color: theme.palette.white,
    background: theme.palette.primary,
    borderColor: theme.palette.primary,
    hoverColor: theme.palette.white,
    hoverBackground: '#d6372a',
    hoverBorderColor: '#d6372a',
    activeColor: theme.palette.white,
    activeBackground: '#bc3024',
    activeBorderColor: '#bc3024',
    disabledColor: theme.palette.white,
    disabledBackground: theme.palette.frost,
    disabledBorderColor: theme.palette.frost
  },
  secondary: {
    color: theme.palette.spruce,
    background: theme.palette.white,
    borderColor: theme.palette.spruce,
    hoverColor: '#333',
    hoverBackground: theme.palette.white,
    hoverBorderColor: '#333',
    activeColor: '#222',
    activeBackground: theme.palette.white,
    activeBorderColor: '#222',
    disabledColor: theme.palette.frost,
    disabledBackground: theme.palette.white,
    disabledBorderColor: theme.palette.frost
  }
}

const size = {
  large: {
    height: 48,
    minWidth: '134px',
    maxWidth: '190px',
    fontSize: 18,
    fontWeight: theme.font.weight.medium,
    padding: `0 ${theme.spacing.xl}px`
  },
  default: {
    height: 40,
    minWidth: '134px',
    maxWidth: '190px',
    fontSize: 18,
    fontWeight: theme.font.weight.medium,
    padding: `0 ${theme.spacing.lg}px`
  },
  small: {
    height: 32,
    minWidth: 'auto',
    maxWidth: 'auto',
    fontSize: 14,
    fontWeight: theme.font.weight.normal,
    padding: `0 ${theme.spacing.sm}px`
  }
}

const getAttributes = props => {
  const typeStyles = type[props.type] || type.default
  const sizeStyles = size[props.size] || size.default

  return { ...typeStyles, ...sizeStyles }
}

const StyledSpinner = styled(Spinner)`
  margin-right: ${({ theme }) => theme.spacing.xs}px;
  vertical-align: middle;
`

function BaseButton(props) {
  const {
    className,
    children,
    href,
    target,
    htmlType,
    disabled,
    loading,
    onClick,
    theme, // eslint-disable-line
    ...rest
  } = props

  return href ? (
    <a
      className={className}
      href={href}
      target={target}
      disabled={loading || disabled}
      {...rest}
    >
      <span>{children}</span>
    </a>
  ) : (
    <button
      className={className}
      type={htmlType}
      disabled={loading || disabled}
      onClick={onClick}
      {...rest}
    >
      {loading && <StyledSpinner size={getAttributes(props).fontSize} />}
      <span>{children}</span>
    </button>
  )
}

const Button = styled(BaseButton)`
  display: inline-block;
  padding: ${props => getAttributes(props).padding};
  min-width: ${props => getAttributes(props).minWidth};
  max-width: ${props => getAttributes(props).maxWidth};
  font-size: ${props => getAttributes(props).fontSize}px;
  font-weight: ${props => getAttributes(props).fontWeight};
  height: ${props => getAttributes(props).height}px;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => getAttributes(props).color};
  vertical-align: middle;
  background: ${props => getAttributes(props).background};
  outline: none;
  border: 1px solid;
  border-color: ${props => getAttributes(props).borderColor};
  border-radius: ${props => getAttributes(props).height / 2}px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    color: ${props => getAttributes(props).hoverColor};
    background: ${props => getAttributes(props).hoverBackground};
    border-color: ${props => getAttributes(props).hoverBorderColor};
  }

  &:active {
    color: ${props => getAttributes(props).activeColor};
    background: ${props => getAttributes(props).activeBackground};
    border-color: ${props => getAttributes(props).activeBorderColor};
  }

  &[disabled] {
    pointer-events: none;
    color: ${props => getAttributes(props).disabledColor};
    background: ${props => getAttributes(props).disabledBackground};
    border-color: ${props => getAttributes(props).disabledBorderColor};
  }

  > span {
    vertical-align: middle;
  }

  & + button {
    margin-left: ${({ theme }) => theme.spacing.sm}px;
  }
`

Button.displayName = 'Button'

Button.defaultProps = {
  theme,
  htmlType: 'button',
  type: 'default',
  size: 'default',
  loading: false,
  disabled: false
}

export default Button
