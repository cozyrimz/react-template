import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import './HomePage.scss'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainBody: {
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
    },
    mainBodyPaper: {
      borderRadius: 0,
      padding: 20,
      margin: 0,
    },
    firstHeading: {
      textAlign: 'left',
      padding: 40,
    },
    secondTitle: {
      fontSize: 'calc((6.5 - 1) * 1.2vw + 1rem)',
      textAlign: 'left',
      backgroundColor: '#000',
      color: '#fff',
      padding: 60,
      lineHeight: 0.858,
    },
    numberedItem: {},
    horizontalLine: {
      borderWidth: 1,
      width: '95%',
      color: '#000',
    },
    eligbility: {
      backgroundColor: '#eff1f5',
      padding: 20,
      borderRadius: 0,
    },
    whoIsEligible: {
      fontSize: 'calc((4.2 - 1) * 1.2vw + 1rem)',
      padding: 20,
    },
    classificationsText: {
      padding: 20,
      paddingTop: 0,
      fontSize: 'calc((1.6 - 1) * 1.2vw + 1rem)',
      letterSpacing: '0.035em',
      lineHeight: '1.3em',
    },
  })
)

export default function Homepage(): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.mainBody}>
      <Typography variant="h1" className={classes.secondTitle}>
        React Template Title!
      </Typography>
      <Paper className={classes.mainBodyPaper}>Main Body</Paper>
    </div>
  )
}
