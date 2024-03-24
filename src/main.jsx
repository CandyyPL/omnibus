import '@/assets/styles/GlobalStyle.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'
import App from '@/App.jsx'
import AuthProvider from '@/providers/AuthProvider'
import QuizDataProvider from '@/providers/QuizDataProvider'

WebFont.load({
  google: {
    families: ['Nunito', 'Montserrat Alternates', 'Fjalla One'],
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QuizDataProvider>
        <App />
      </QuizDataProvider>
    </AuthProvider>
  </React.StrictMode>
)
