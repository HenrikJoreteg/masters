import React from 'react'

export default React.createClass({
  render () {
    const {label} = this.props
    const cssColor = '#' + label.color
    let content

    // editing
    if (label.editing) {
      content = (
        <form className='label'>
          <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
          <input name='name'/>
          <input name='color'/>
          <button type='submit' className='button button-small'>Save</button>
          <button type='button' className='button button-small button-unstyled'>cancel</button>
        </form>
      )
    } else {
      content = (
        <div className='label'>
          <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
          <span>{label.name}</span>
          <span className='octicon octicon-pencil'></span>
          <span className='octicon octicon-x'></span>
        </div>
      )
    }

    return (
      <div>
        {content}
      </div>
    )
  }
})
