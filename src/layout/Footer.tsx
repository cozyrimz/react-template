import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      textAlign: 'left',
      backgroundColor: '#000',
      color: '#fff',
      padding: 40,
    },
  })
)

export default function Footer(): JSX.Element {
  const classes = useStyles()

  return (
    <Typography variant="h5" className={classes.footer}>
      This site is not affiliated with or endorsed by ...
      <br />
      This site is for informational purposes only.
      <br />
      Copyright © 2021 Sarim R Shah. All rights reserved.
    </Typography>
  )
}
