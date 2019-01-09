export const isNumber = n => typeof n === 'number' && !isNaN(n)

export const px = n => (isNumber(n) ? `${n}px` : n)

export const get = (from, ...selectors) =>
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
export const T = path => props => get(props, `theme.${path}`)

export const zIndex = {
  hide: -1,
  base: 0,
  loading: 3,
  selected: 25,
  active: 50,
  nav: 1000,
  navFixed: 1050,
  dropdown: 999,
  popover: 3000,
  tooltip: 4000,
  banner: 5000,
  overlay: 5998,
  modal: 5999,
  toast: 6000
}
