import React from 'react'

export class ScheduleOutlined extends React.Component {
  render() {
    const { style } = this.props
    return (
      <i aria-hidden='true' className='icon-schedule' style={style} />
    )
  }
}
