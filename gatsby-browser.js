require('typeface-montserrat')
require('typeface-merriweather')
require("prismjs/themes/prism-tomorrow.css")

exports.onServiceWorkerUpdateReady = () => {
  window.location.reload()
}
