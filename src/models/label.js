import Model from 'ampersand-model'

export default Model.extend({
  props: {
    name: 'string',
    color: 'string'
  },

  session: {
    editing: {
      type: 'boolean',
      default: false
    }
  }
})
