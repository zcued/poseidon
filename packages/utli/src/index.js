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
