import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Footer.jsx'
import Header from './Header.jsx'

import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <App/> 
  </React.StrictMode>,
)
