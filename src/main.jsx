import '@/assets/styles/GlobalStyle.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'
import App from '@/App.jsx'
import AuthProvider from '@/providers/AuthProvider'
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import QuizDataProvider from '@/providers/QuizDataProvider'

WebFont.load({
  google: {
    families: ['Nunito', 'Montserrat Alternates', 'Fjalla One'],
  },
})

const client = new GraphQLClient({
  url: 'https://graphql.datocms.com/',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_DATO_CMS_KEY}`,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <AuthProvider>
        <QuizDataProvider>
          <App />
        </QuizDataProvider>
      </AuthProvider>
    </ClientContext.Provider>
  </React.StrictMode>
)
