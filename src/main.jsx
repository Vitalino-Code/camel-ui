import React from 'react'
import ReactDOM from 'react-dom/client'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './contexts/authContext'

import { RoutesManager } from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <RoutesManager />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
