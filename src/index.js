import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ChakraProvider, ThemeProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from './theme'
import { Provider } from 'react-redux'
import store from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
)
