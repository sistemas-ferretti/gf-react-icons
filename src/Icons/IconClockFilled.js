import React from 'react'

export class IconClockFilled extends React.Component {
  render() {
    const { style } = this.props
    return (
      <i aria-hidden='true' className='icon-iconclockoutlined' style={style} />
    )
  }
}
