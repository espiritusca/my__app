import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { yellow } from '@mui/material/colors'

import { AuthProvider } from './state/auth'

import App from './App'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#26619C',
    },
    secondary: {
      main: yellow[500],
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)

