import React from 'react'

export class CarryOutTwoTone extends React.Component {
  render() {
    const { style } = this.props
    return (
      <i
        aria-hidden='true'
        className='icon-carryout'
        style={{
          ...style,
          background:
            'linear-gradient(90deg, rgb(63, 94, 251) 0%, rgb(87, 154, 237) 13%, rgb(151, 70, 252) 100%)',
          backgroundClip: 'border-box',
          display: 'inline-block',
          WebkitTextFillColor: 'transparent',
          WebkitBackgroundClip: 'text'
        }}
      />
    )
  }
}
