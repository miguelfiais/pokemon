import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/routes'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
    <GlobalStyles />
  </React.StrictMode>,
)
