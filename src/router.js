import Router from 'ampersand-router'

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos'
  },

  public () {
    console.log('public page')
  },

  repos () {
    console.log('repos')
  }
})
