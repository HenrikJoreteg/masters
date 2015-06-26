var getConfig = require('hjs-webpack')

module.exports = getConfig({
	in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (context) {
    return {
      'index.html': context.defaultTemplate(),
      '200.html': context.defaultTemplate()
    }
  }
})
