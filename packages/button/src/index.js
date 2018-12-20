import styled from 'styled-components'
import theme from '@zcool/theme'

const appearances = {
  default: {
    color: theme.palette.primary,
    background: theme.palette.white,
    borderColor: theme.palette.primary,
    hoverColor: '#d6372a',
    hoverBackground: theme.palette.white,
    hoverBorderColor: '#d6372a',
    activeColor: '#bc3024',
    activeBackground: theme.palette.white,
    activeBorderColor: '#bc3024'
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
    activeBorderColor: '#bc3024'
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
    activeBorderColor: '#222'
  }
}

const size = {
  large: {
    lineHeight: '48px',
    minWidth: '134px',
    maxWidth: '190px',
    fontSize: '18px',
    fontWeight: theme.font.weight.medium,
    padding: `0 ${theme.spacing.xl}px`
  },
  default: {
    lineHeight: '40px',
    minWidth: '134px',
    maxWidth: '190px',
    fontSize: '18px',
    fontWeight: theme.font.weight.medium,
    padding: `0 ${theme.spacing.lg}px`
  },
  small: {
    lineHeight: '32px',
    minWidth: 'auto',
    maxWidth: 'auto',
    fontSize: '14px',
    fontWeight: theme.font.weight.normal,
    padding: `0 ${theme.spacing.sm}px`
  }
}

const getAttributes = props => {
  const appearanceStyles = appearances[props.appearance] || appearances.default
  const sizeStyles = size[props.size] || size.default

  return { ...appearanceStyles, ...sizeStyles }
}

const Button = styled.button`
  outline: none;
  border: 1px solid;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${props => getAttributes(props).color};
  background: ${props => getAttributes(props).background};
  border-color: ${props => getAttributes(props).borderColor};
  line-height: ${props => getAttributes(props).lineHeight};
  min-width: ${props => getAttributes(props).minWidth};
  max-width: ${props => getAttributes(props).maxWidth};
  font-size: ${props => getAttributes(props).fontSize};
  font-weight: ${props => getAttributes(props).fontWeight};
  padding: ${props => getAttributes(props).padding};

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
`

Button.displayName = 'Button'

Button.defaultProps = {
  theme,
  appearance: 'default',
  size: 'default'
}

export default Button
