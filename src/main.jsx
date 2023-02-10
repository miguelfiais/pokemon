import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/routes'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer autoClose={2000}/>
    <Router />
    <GlobalStyles />
  </React.StrictMode>,
)
