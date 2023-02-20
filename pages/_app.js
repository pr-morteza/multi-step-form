
import { createTheme, ThemeProvider } from '@mui/material'
import { PeriodProvider } from '../context/period'
import '../styles/globals.css'

const theme = createTheme({
  typography: {
    fontFamily: [ 'Ubuntu', 'sans-serif'].join(','),
    h4:{
      fontWeight:700,
      color:'hsl(213, 96%, 18%)'
    },
    h6:{
      fontWeight:500,
      color:'hsl(213, 96%, 18%)'
    },
    p:{
      fontWeight:400
    },
    subtitle1:{
      fontWeight:700
    },
    body2:{
      fontWeight:500
    },
    body1:{
      fontWeight:500
    }
   }
})
function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}><PeriodProvider><Component {...pageProps} /></PeriodProvider></ThemeProvider>
}

export default MyApp
