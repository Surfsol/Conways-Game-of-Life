import React from 'react'
import Grid from "@material-ui/core/Grid";
import Box from "./Box";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    grid: {
      maxWidth: "780px",
      margin: "auto",
      marginTop: "5%",
    },
    paper: {
      font: '4rem',
      direction:'column'
    
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


const About = ()=> {
    const classes = useStyles();

    return(
        <>
        <Grid container className={classes.grid}>
        <h1>Conway's Game of Life</h1>
        <Grid item>In the Game of Life, these rules examine each cell of the grid. For each cell, it counts that cell's eight neighbors (up, down, left, right, and diagonals), and then act on that result.

        If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.
        If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.
        From those two rules, many types of "creatures" can be created that move around the "landscape".</Grid>

        <Grid container column className={classes.paper}>
        <Grid item><h3>How to use:</h3></Grid>
        <Grid item><h4>Before starting or when the game is stopped, you can select cells that you want to be alive.</h4></Grid>
        <Grid item><h4>Then restart the game and watch what happens from generation to generation.</h4></Grid>

        <h3>Add Colors: at the top of the grid, write a color in the box and click to add</h3>
        <h3>Adjust Speed: at the bottom of the grid, select 'Faster' or 'Slower'</h3>
        <h3>Adjust Size: at the bottom of the grid, select 'Bigger' or 'Smaller'</h3>
        </Grid>
        </Grid>
        </>
    )
}
export default About