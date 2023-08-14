import React from 'react'

export class IconCalendarOutlined extends React.Component {
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
