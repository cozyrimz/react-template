import React from 'react'

import common from '@material-ui/core/colors/common'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage'
import TopNavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

const { black, white } = common

const theme = createMuiTheme({
  palette: {
    primary: {
      main: white,
    },
    secondary: {
      main: black,
    },
  },
  typography: {
    fontFamily: ['Bebas Neue', 'cursive'].join(','),
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
})

export default function MainRouter(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <TopNavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </ThemeProvider>
  )
}
