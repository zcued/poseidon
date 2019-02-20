import React from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'
import Spinner from '@zcool/spinner'

export const type = {
  default: {
    color: theme.palette.primary,
    background: 'transparent',
    borderColor: theme.palette.primary,
    hoverColor: '#d6372a',
    hoverBackground: 'transparent',
    hoverBorderColor: '#d6372a',
    activeColor: '#bc3024',
    activeBackground: 'transparent',
    activeBorderColor: '#bc3024',
    disabledColor: theme.palette.frost,
    disabledBackground: 'transparent',
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
    background: 'transparent',
    borderColor: theme.palette.spruce,
    hoverColor: '#333',
    hoverBackground: 'transparent',
    hoverBorderColor: '#333',
    activeColor: '#222',
    activeBackground: 'transparent',
    activeBorderColor: '#222',
    disabledColor: theme.palette.frost,
    disabledBackground: 'transparent',
    disabledBorderColor: theme.palette.frost
  }
}

export const size = {
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

export const getAttributes = props => {
  const typeStyles = type[props.type] || type.default
  const sizeStyles = size[props.size] || size.default

  return { ...typeStyles, ...sizeStyles }
}

export interface ButtonProps {
  theme?: any
  className?: string
  children: React.ReactNode
  href?: string
  target?: string
  htmlType?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  loading?: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'default' | 'primary' | 'secondary'
  size?: 'default' | 'large' | 'small'
}

function BaseButton(props: ButtonProps) {
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
    <a className={className} href={href} target={target} {...rest}>
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
      {loading && <Spinner size={getAttributes(props).fontSize} />}
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

  > div {
    margin-right: ${({ theme }) => theme.spacing.xs}px;
    vertical-align: -3px;
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
