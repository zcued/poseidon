const unit = 8

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

export const palette = {
  primary: '#ea4335',
  secondary: '#ffd100',
  white: '#ffffff',
  black: '#1f1f1f',
  black2: '#383838',
  spruce: '#666666',
  stone: '#a3a3a3',
  frost: '#dddddd',
  daisy: '#f0f4f5',
  black16: 'rgba(0, 0, 0, 0.16)',
  black30: 'rgba(0, 0, 0, 0.3)',
  black60: 'rgba(0, 0, 0, 0.6)'
}

export const spacing = {
  xs: unit,
  sm: unit * 2,
  md: unit * 3,
  lg: unit * 4,
  xl: unit * 5
}

export const icon = {
  size: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 26
  }
}

export const font = {
  weight: {
    normal: 'normal',
    medium: 600,
    bold: 'bold'
  },
  size: {
    xs: 12,
    sm: 14,
    md: 20,
    lg: 24,
    xl: 32
  },
  title: {
    size: {
      xs: 14,
      sm: 16,
      md: 22,
      lg: 26,
      xl: 34
    }
  },
  align: 'center'
}

export default {
  breakpoints,
  palette,
  spacing,
  font,
  icon
}
