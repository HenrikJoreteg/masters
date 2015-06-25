import React from 'react'
require('./styles/main.styl')

const Hello = React.createClass({
  render () {
    return <div>Hello, {this.props.name}</div>
  }
})

React.render(<Hello name="henrik"/>, document.body)
