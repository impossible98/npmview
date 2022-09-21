// import third-party modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css/normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import "@arco-design/web-react/dist/css/arco.css";
import { BrowserRouter } from 'react-router-dom'
// import local modules
import Router from './router/index'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
