import React from 'react'

export class IconAccountStateFilled extends React.Component {
  render() {
    const { style } = this.props

    return (
      <i
        aria-hidden='true'
        className='icon-iconaccountstateoutlined'
        style={style}
      />
    )
  }
}
