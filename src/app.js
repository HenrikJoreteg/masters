import Router from './router'
import styles from './styles/main.styl'
import icons from 'octicons/octicons/octicons.css'
import app from 'ampersand-app'
import Me from './models/me'

window.app = app

app.extend({
  init () {
    this.me = new Me()
    this.me.fetchInitialData()
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
