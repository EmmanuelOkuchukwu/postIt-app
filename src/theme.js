import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fontSizes: {
    lg: '18px',
  },
  screenSizes: {
    smScreen: '400px',
    mdScreen: '768px',
    lgScreen: '1024px',
    xlgScreen: '1440px'
  },
  colors: {
    gray: {
      100: '#fafafa',
      200: '#f7f7f7',
      300: '#dddddd'
    },
    purple: {
      300: '#6C63FF'
    }
  },
})

export default theme