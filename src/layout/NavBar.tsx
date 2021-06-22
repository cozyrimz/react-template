import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { NavLink, Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 20,
  },
  toolbar: {
    paddingLeft: 30,
    paddingRight: 30,
    flexFlow: 'row wrap',
  },
  buttonStyle2: {
    marginLeft: 5,
    fontSize: 'calc((2.9 - 1) * 1.3vw + 1rem)',
  },
  navLinkRow: {
    textDecorationLine: 'None',
  },
  titleLink: {
    flexGrow: 1,
    fontSize: 'calc((2.9 - 1) * 1.3vw + 1rem)',
    textDecorationLine: 'None',
  },
  navBarButtonRow: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}))

export default function TopNavBar(): JSX.Element {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Link to="/" className={classes.titleLink}>
          <Button className={classes.titleLink} color="secondary">
            Button 1
          </Button>
        </Link>
        <div className={classes.navBarButtonRow}>
          <NavLink to="/" className={classes.navLinkRow}>
            <Button className={classes.buttonStyle2} color="secondary">
              Button2
            </Button>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  )
}
