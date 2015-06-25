import React from 'react'

export default React.createClass({
  displayName: 'RepoDetail',

  render () {
    const {repo} = this.props

    return (
      <div className='container'>
        <h1>{repo.full_name}</h1>
        <p></p>
        <ul></ul>
      </div>
    )
  }
})
