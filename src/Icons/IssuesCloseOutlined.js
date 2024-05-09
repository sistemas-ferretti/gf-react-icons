import React from 'react'

export class IssuesCloseOutlined extends React.Component {
  render() {
    const { style } = this.props
    return (
      <i aria-hidden='true' className='icon-issuesclose' style={style} />
    )
  }
}
