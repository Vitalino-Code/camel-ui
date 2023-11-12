import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

import Register from './pages/register/index'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </ThemeProvider>
  </Router>,
)
