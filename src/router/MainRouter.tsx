import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage'
import TopNavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

import { theme } from '../theme/theme'

export default function MainRouter(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <TopNavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
      <Footer />
    </ThemeProvider>
  )
}
