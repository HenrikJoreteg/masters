import React from 'react'

export default React.createClass({
  render () {
    const {label} = this.props

    return <li>{label.name}</li>
  }
})
