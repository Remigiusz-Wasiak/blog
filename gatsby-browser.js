require('typeface-montserrat')
require('typeface-merriweather')
require("prismjs/themes/prism-tomorrow.css")

exports.onServiceWorkerUpdateReady = () => {
  window.location.reload()
  console.log('service worker update reade - page reloaded');
}
