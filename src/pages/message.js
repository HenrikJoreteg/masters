import React from 'react'

export default React.createClass({
  displayName: 'MessagePage',

  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    )
  }
})
