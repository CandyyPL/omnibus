import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import WebFont from 'webfontloader'
import GlobalStyle from '@/assets/styles/GlobalStyle.js'

WebFont.load({
  google: {
    families: ['Nunito'],
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
