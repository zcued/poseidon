import * as React from 'react'

class ClickOutSide extends React.Component {
  wrapper = null

  componentDidMount() {
    document.addEventListener('click', this.handleClick, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, true)
  }

  handleClick = e => {
    if (this.isContains(e.target)) {
      return
    }

    this.props.onClick(e)
  }

  isContains(node) {
    if (!this.wrapper) {
      return true
    }

    return this.wrapper !== node && this.wrapper.contains(node)
  }

  render() {
    const { children, className } = this.props
    return (
      <div
        className={className}
        ref={x => {
          this.wrapper = x
        }}
      >
        {children}
      </div>
    )
  }
}

export default ClickOutSide
