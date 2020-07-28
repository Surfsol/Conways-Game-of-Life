import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  paper: {
    height: 30,
    width: 30,
  },
  colors: {
    background: "red",
    height: 30,
    width: 30,
  },
  blank: {
    height: 30,
    width: 30,
    background: "white",
  },
}));



const Box = ({ value, color, setColor }) => {

  const classes = useStyles();

  const add = ()=> {
    setColor([
      ...color, value
    ])
    }
    
  return (
    <>
      <Grid  item>
        <Paper
          onClick={add}
          value = {value}
          className={classes.blank}
          className={color.includes(value) ? classes.colors : classes.blank}
        ></Paper>
      </Grid>
    </>
  );
};
export default Box;
