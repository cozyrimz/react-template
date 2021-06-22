import { createMuiTheme } from '@material-ui/core/styles'
import common from '@material-ui/core/colors/common'
const { black, white } = common

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: white,
    },
    secondary: {
      main: black,
    },
  },
  //   typography: {
  //     // fontFamily: ['Bebas Neue', 'cursive'].join(','),
  //     htmlFontSize: 16,
  //     fontSize: 14,
  //     fontWeightLight: 300,
  //     fontWeightRegular: 400,
  //     fontWeightMedium: 500,
  //   },
})
