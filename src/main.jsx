import React from 'react'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'
import App from '@/App.jsx'
import AuthProvider from '@/providers/AuthProvider'
import QuizDataProvider from '@/providers/QuizDataProvider'
import GlobalStyle from '@/assets/styles/GlobalStyle.js'
import { ThemeProvider } from 'styled-components'
import Theme from '@/assets/styles/Theme.js'

WebFont.load({
  google: {
    families: ['Nunito', 'Montserrat Alternates', 'Fjalla One'],
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QuizDataProvider>
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
          <App />
        </ThemeProvider>
      </QuizDataProvider>
    </AuthProvider>
  </React.StrictMode>
)
