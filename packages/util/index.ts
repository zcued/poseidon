export const isNumber = (n: any) => typeof n === 'number' && !isNaN(n)

export const px = (n: any) => (isNumber(n) ? `${n}px` : n)

export const get = (from: object, ...selectors: Array<string>) =>
  selectors.map(selector =>
    selector
      .replace(/\[([^\[\]]*)\]/g, '.$1.') // eslint-disable-line
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  )

/**
 * get value from props.theme
 * @param path
 */
export const T = (path: string) => (props: object) =>
  get(props, `theme.${path}`)

export const zIndex = {
  /** -1 */
  hide: -1,
  /** 0 */
  base: 0,
  /** 3 */
  loading: 3,
  /** 25 */
  selected: 25,
  /** 50 */
  active: 50,
  /** 500 */
  dropdown: 500,
  /** 1000 */
  nav: 1000,
  /** 1050 */
  navFixed: 1050,
  /** 2000 */
  modal: 2000,
  /** 3000 */
  popover: 3000,
  /** 4000 */
  banner: 4000,
  /** 5000 */
  overlay: 5000,
  /** 6000 */
  toast: 6000,
  /** 7000 */
  tooltip: 7000
}
