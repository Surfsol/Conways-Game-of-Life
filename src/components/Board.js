import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "./Box";

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
  const [start, setStart] = useState(false);
  console.log("color", color);
  console.log("start", start);

  //inital set up
  let arr = [];
  console.log(typeof [])
  for (let i = 1; i < 27; i++) {
    for (let j = 1; j < 27; j++) {
      let row = i.toString();
      let col = j.toString();
      let value = row + "." + col;
      arr.push(value);
    }
  }
  //console.log(arr);
  //find inital limits
  function Limits(color) {
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
    if (minR < 0) {
      minR = 0;
    }
    let maxR = Math.max(...rows) + 1;
    if (minR > 26) {
      minR = 26;
    }
    rowLimits.push(minR, maxR);
    let minC = Math.min(...cols) - 1;
    if (minC < 0) {
      minC = 0;
    }
    let maxC = Math.max(...cols) + 1;
    if (minC > 26) {
      minC = 26;
    }
    colLimits.push(minC, maxC);
    return [colLimits, rowLimits];
  }
  //console.log(rowLimits[0], rowLimits[1], colLimits[0], colLimits[1]);

 
  useEffect(() => {
    //e.preventDefault()
    if (start) {
      console.log("running");
     // let [colLimits, rowLimits] = Limits(color)

      //
      // while(start){
      //   setTimeout(function () {
        let newArray = []
        for (let i = 0; i < arr.length; i++) {
          let sep = arr[i].split(".");
          let row = parseInt(sep[0]);
          let col = parseInt(sep[1]);
          let count = 0;
          // if (
          //   row >= rowLimits[0] &&
          //   row <= rowLimits[1] &&
          //   col >= colLimits[0] &&
          //   col <= colLimits[1]
          // ) {
            if (color.includes(row.toString() + "." + (col + 1).toString())) {
              count += 1;
            }
            if (color.includes(row.toString() + "." + (col - 1).toString())) {
              count += 1;
            }

            if (color.includes((row + 1).toString() + "." + col.toString())) {
              count += 1;
            }

            if (color.includes((row - 1).toString() + "." + col.toString())) {
              count += 1;
            }

            if (
              color.includes((row + 1).toString() + "." + (col - 1).toString())
            ) {
              count += 1;
            }

            if (
              color.includes((row + 1).toString() + "." + (col + 1).toString())
            ) {
              count += 1;
            }

            if (
              color.includes((row - 1).toString() + "." + (col - 1).toString())
            ) {
              count += 1;
            }

            if (
              color.includes((row - 1).toString() + "." + (col + 1).toString())
            ) {
              count += 1;
            }
            
            if (count === 2 || count === 3) {
              console.log('put into array',arr[i])
              newArray.push(arr[i])
            } 
          }
          setColor(newArray)
      //   }, [1000])
      // }
    }
  }, [start]);
  
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

  //console.log(right, left, top, bottom, rt, lt, rb, lb);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container className={classes.grid} justify="center" spacing={0}>
          {arr.map((value) => (
            <Box key={value} value={value} color={color} setColor={setColor}/>
         
          ))}
        </Grid>
        <button onClick={() => setStart(!start)}>Start</button>
        <button onClick={() => setColor([])}>Reset</button>
      </Grid>
    </Grid>
  );
}
