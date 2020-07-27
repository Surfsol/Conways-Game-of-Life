import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid:{
    maxWidth: '780px',
    margin: 'auto'
  },
  paper: {
    height: 30,
    width: 30,
  },
 
}));

export default function SpacingGrid() {
 // const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  

  let arr = []
  for(let i=0; i<26; i++){
    let row = i
    for(let j=0; j<26; j++){
      let column = j
      arr.push({i:j})
    }
  }

  return (
    <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12}>
      <Grid container className={classes.grid} justify="center" spacing={0}>
        {arr.map((value) => (
          <Grid key={value} item>
            <Paper className={classes.paper} />
          </Grid>
        ))}
      </Grid>
    </Grid>
    </Grid>
  );
}
