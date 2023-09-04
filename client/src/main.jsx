import React from 'react'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'
import App from '@/App.jsx'
import '@/assets/styles/GlobalStyle.scss'

WebFont.load({
  google: {
    families: ['Nunito', 'Montserrat Alternates', 'Fjalla One'],
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

