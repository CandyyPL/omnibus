import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from '@/assets/styles/GlobalStyle'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import App from '@/App'
import WebFont from 'webfontloader'
import { ThemeProvider } from 'styled-components'
import Theme from '@/assets/styles/Theme'

WebFont.load({
  google: {
    families: ['Nunito', 'Chango', 'Caveat'],
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
