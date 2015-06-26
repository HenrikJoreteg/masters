const config = {
  'localhost': {
    authUrl: 'https://labelr-localhost.herokuapp.com/authenticate',
    clientId: 'f8dd69187841cdd22a26'
  },

  'labelr.surge.sh': {
    authUrl: 'https://labelr-production.herokuapp.com/authenticate',
    clientId: '9cc77faf5ffc6f6f9b9a'
  }
}[window.location.hostname]

export default config
