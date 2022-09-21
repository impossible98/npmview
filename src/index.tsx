// import third-party modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css/normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'
// import local modules
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
