import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  onDeleteClick (event) {
    event.preventDefault()
    this.props.label.destroy()
  },

  onCancelClick (event) {
    event.preventDefault()
    this.props.label.editing = false
  },

  onEditClick (event) {
    event.preventDefault()
    this.props.label.editing = true
  },

  getInitialState () {
    const {name, color} = this.props.label

    return {name, color}
  },

  onNameChange (event) {
    this.setState({
      name: event.target.value
    })
  },

  onColorChange (event) {
    this.setState({
      color: event.target.value.slice(1)
    })
  },

  render () {
    const {label} = this.props
    const {color} = this.state
    const cssColor = '#' + color
    let content

    // editing
    if (label.editing) {
      content = (
        <form className='label'>
          <span style={{backgroundColor: cssColor}} className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
          <input name='name' onChange={this.onNameChange} value={this.state.name}/>
          <input name='color' onChange={this.onColorChange} value={cssColor} />
          <button type='submit' className='button button-small'>Save</button>
          <button onClick={this.onCancelClick} type='button' className='button button-small button-unstyled'>cancel</button>
        </form>
      )
    } else {
      content = (
        <div className='label'>
          <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
          <span>{label.name}</span>
          <span onClick={this.onEditClick} className='octicon octicon-pencil'></span>
          <span onClick={this.onDeleteClick} className='octicon octicon-x'></span>
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
