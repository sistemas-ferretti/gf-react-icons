import React from 'react'

export class IconPreFormFilled extends React.Component {
  render() {
    const { style } = this.props
    return (
      <i
        aria-hidden='true'
        className='icon-iconpreformoutlined'
        style={style}
      />
    )
  }
}
