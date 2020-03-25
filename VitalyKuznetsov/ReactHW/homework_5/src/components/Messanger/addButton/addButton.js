import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    '& > span': {
      margin: theme.spacing(0),
    },
  },
}));

export default function Icons() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='add'>
      <Icon color="primary" style={{ fontSize: 30 }}>add_circle</Icon>
    </div>
  );
}