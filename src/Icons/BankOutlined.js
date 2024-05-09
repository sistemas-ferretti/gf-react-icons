import React from 'react'

export class BankOutlined extends React.Component {
  render() {
    const { style } = this.props
    return (
      <i aria-hidden='true' className='icon-bank' style={style} />
    )
  }
}
