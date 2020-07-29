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
  const [go, setGo] = useState(false);
  const [speed, setSpeed] = useState(1000);
  console.log("color", speed);
  // console.log("start", start);

  //inital set up
  let arr = [];
  //console.log(typeof [])
  for (let i = 1; i < 27; i++) {
    for (let j = 1; j < 27; j++) {
      let row = i.toString();
      let col = j.toString();
      let value = row + "." + col;
      arr.push(value);
    }
  }

  function speedFaster(){
    if (speed > 0){
      setSpeed(speed - 1)
    }
  }
  function speedSlower(){
    if (speed > 0){
      setSpeed(speed + 1)
    }
  }

  if (start){
    setTimeout(function () {
      setGo(!go)
    }, [speed])
  }
console.log('go',go)
 
  useEffect(() => {
    //e.preventDefault()
    if (go) {
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
              //console.log('put into array',arr[i])
              newArray.push(arr[i])
            } 
          }
          setColor(newArray)
      //   }, [1000])
      // }
    }
  }, [go]);
  
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
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button onClick={() => setColor([])}>Reset</button>
        <button onClick={speedFaster}>Faster</button>
        <button onClick={speedSlower}>Slower</button>
      
      </Grid>
    </Grid>
  );
}
