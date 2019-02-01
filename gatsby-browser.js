import 'typeface-montserrat'
import 'typeface-merriweather'
require("prismjs/themes/prism-tomorrow.css")

exports.onServiceWorkerUpdateReady = () => {
  window.location.reload()
}
