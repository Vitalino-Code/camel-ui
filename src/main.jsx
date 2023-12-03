import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/home'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  </Router>,
)
