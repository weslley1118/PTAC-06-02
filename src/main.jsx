import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './componente/Footer.jsx'
import Header from './componente/Header.jsx'
import Main from './componente/Main.jsx' 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
)