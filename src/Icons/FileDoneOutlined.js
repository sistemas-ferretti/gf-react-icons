import React from 'react'

export class FileDoneOutlined extends React.Component {
  render() {
    const { style } = this.props
    return (
      <i aria-hidden='true' className='icon-filedone' style={style} />
    )
  }
}
