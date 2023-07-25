import React from 'react'

export class IconStairsGradient extends React.Component {
  render() {
    return (
      <i
        aria-hidden='true'
        style={{
          background:
            'linear-gradient(0deg, rgba(36,173,255,1) 14%, rgba(45,56,253,1) 82%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}
        className='icon-stairsoutlined p-1'
      />
    )
  }
}
