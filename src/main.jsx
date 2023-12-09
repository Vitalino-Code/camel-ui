import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './contexts/authContext'

import { RoutesManager } from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <ToastContainer theme="dark" />
      <GlobalStyles />
      <AuthProvider>
        <RoutesManager />
      </AuthProvider>
    </ThemeProvider>
  </Router>,
)
