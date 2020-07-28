import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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

export default function SpacingGrid() {
  const classes = useStyles();
  const [color, setColor] = useState(["13.12", "13.13", "12.12"]);


  let arr = [];
  for (let i = 1; i < 27; i++) {
    for (let j = 1; j < 27; j++) {
      let row = i.toString();
      let col = j.toString();
      let value = row + "." + col;
      arr.push(value);
    }
  }
  //console.log(arr);

  let rowLimits = [];
  let colLimits = [];
  let rows = [];
  let cols = [];
  for (let i = 0; i < color.length; i++) {
    let sep = color[i].split(".");
    let row = parseInt(sep[0]);
    let col = parseInt(sep[1]);
    rows.push(row);
    cols.push(col);
  }

  let minR = Math.min(...rows) - 1;
  let maxR = Math.max(...rows) + 1;
  rowLimits.push(minR, maxR);
  let minC = Math.min(...cols) - 1;
  let maxC = Math.max(...cols) + 1;
  colLimits.push(minC, maxC);
  console.log(rowLimits[0], rowLimits[1], colLimits[0], colLimits[1]);

  for (let i = 0; i < arr.lenght; i++) {
    let sep = arr[i].split(".");
    let row = parseInt(sep[0]);
    let col = parseInt(sep[1]);
  
    if (row >= rowLimits[0] && row <= rowLimits[1] && col >= colLimits[0] && col <= colLimits[1]){
      console.log(arr[i])
    }
  }

  let value = "13.13";
  let sep = value.split(".");
  let row = parseInt(sep[0]);
  let col = parseInt(sep[1]);
  let right = row.toString() + "." + (col + 1).toString();
  let left = row.toString() + "." + (col - 1).toString();
  let top = (row + 1).toString() + "." + col.toString();
  let bottom = (row - 1).toString() + "." + col.toString();
  let rt = (row + 1).toString() + "." + (col - 1).toString();
  let lt = (row + 1).toString() + "." + (col + 1).toString();
  let rb = (row - 1).toString() + "." + (col - 1).toString();
  let lb = (row - 1).toString() + "." + (col + 1).toString();

  console.log(right, left, top, bottom, rt, lt, rb, lb);



  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container className={classes.grid} justify="center" spacing={0}>
          {arr.map((value) => (
            <Grid key={value} item>
              <Paper
                key={value}
                className={
                  color.includes(value) ? classes.colors : classes.blank
                }
              ></Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
