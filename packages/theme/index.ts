const unit = 8

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

export const palette = {
  /** #ea4335 */
  primary: '#ea4335',

  /** #ffd100 */
  secondary: '#ffd100',

  /** #4a90e2 */
  blue: '#4a90e2',

  /** #ffffff */
  white: '#ffffff',

  /** #1f1f1f */
  black: '#1f1f1f',

  /** #383838 */
  black2: '#383838',

  /** #333333 */
  black3: '#333333',

  /** #666666 */
  spruce: '#666666',

  /** #999999 */
  pewter: '#999999',

  /** #a3a3a3 */
  stone: '#a3a3a3',

  /** #cccccc */
  gray: '#cccccc',

  /** #dddddd */
  frost: '#dddddd',

  /** #f0f4f5 */
  daisy: '#f0f4f5',

  /** #f5f8fa */
  pearl: '#f5f8fa',

  /** rgba(0, 0, 0, 0.16) */
  black16: 'rgba(0, 0, 0, 0.16)',

  /** rgba(0, 0, 0, 0.3) */
  black30: 'rgba(0, 0, 0, 0.3)',

  /** rgba(0, 0, 0, 0.6) */
  black60: 'rgba(0, 0, 0, 0.6)',

  /** rgba(0, 0, 0, 0.8) */
  black80: 'rgba(0, 0, 0, 0.8)',

  /** rgba(0, 0, 0, 8) */
  black100: 'rgba(0, 0, 0, 1)'
}

export const spacing = {
  /** 8 */
  xs: unit,

  /** 16 */
  sm: unit * 2,

  /** 24 */
  md: unit * 3,

  /** 32 */
  lg: unit * 4,

  /** 40 */
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
    light: 200,
    normal: 'normal',
    medium: 500,
    bold: 'bold'
  },
  size: {
    /** 12 */
    xs: 12,

    /** 14 */
    sm: 14,

    /** 16 */
    md: 16,

    /** 20 */
    lg: 20,

    /** 24 */
    xl: 24,

    /** 32 */
    xxl: 32
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
