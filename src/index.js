import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import { yellow } from '@mui/material/colors'

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
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

