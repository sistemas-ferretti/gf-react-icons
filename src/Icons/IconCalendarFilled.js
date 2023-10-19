import React from 'react'

export class IconCalendarFilled extends React.Component {
  render() {
    const { style } = this.props
    return (
      <i
        aria-hidden='true'
        className='icon-iconcalendaroutlined'
        style={style}
      />
    )
  }
}
