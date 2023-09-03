import React from 'react'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'
import GlobalStyle from '@/assets/styles/GlobalStyle.js'
import { ThemeProvider } from 'styled-components'
import Theme from '@/assets/styles/Theme.js'
import App from '@/App.jsx'

WebFont.load({
  google: {
    families: ['Nunito', 'Montserrat Alternates', 'Fjalla One'],
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
