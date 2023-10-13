import React from 'react'

export class IconInformacion extends React.Component {
  render() {
    const { style } = this.props

    return (
      <i aria-hidden='true' className='icon-iconinformacion' style={style} />
    )
  }
}
