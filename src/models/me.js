import Model from 'ampersand-model'

export default Model.extend({
  url: 'https://api.github.com/user',

  initialize () {
    this.token = window.localStorage.token
    this.on('change:token', this.onTokenChange)
  },

  props: {
    id: 'number',
    login: 'string',
    avatar_url: 'string'
  },

  session: {
    token: 'string'
  },

  onTokenChange () {
    window.localStorage.token = this.token
    this.fetchInitialData()
  },

  ajaxConfig () {
    console.log(this.token)

    return {
      headers: {
        Authorization: 'token ' + this.token
      }
    }
  },

  fetchInitialData () {
    if (this.token) {
      this.fetch()
    }
  }
})
