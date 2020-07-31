import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "./Box";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:'#85A7CB'
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
  const [colorOptions, setColorOptions] = useState(["purple"]);
  const [count, setCount] = useState(0);
  const [tall, setTall] = useState(30);
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

  function plus() {
    setTall(tall + 2);
  }

  function minus() {
    if (tall > 10) {
      setTall(tall - 2);
    }
  }

  function speedFaster() {
    if (speed > 0) {
      setSpeed(speed - 10);
    }
  }
  function speedSlower() {
    if (speed > 0) {
      setSpeed(speed + 10);
    }
  }

  if (start) {
    setTimeout(
      function () {
        setGo(!go);
        setCount(count + 1);
      },
      [speed]
    );
  }
  console.log("go", go);

  useEffect(() => {
    //e.preventDefault()
    if (go) {
      console.log("running");
      // let [colLimits, rowLimits] = Limits(color)

      //
      // while(start){
      //   setTimeout(function () {
      let newArray = [];
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

        if (color.includes((row + 1).toString() + "." + (col - 1).toString())) {
          count += 1;
        }

        if (color.includes((row + 1).toString() + "." + (col + 1).toString())) {
          count += 1;
        }

        if (color.includes((row - 1).toString() + "." + (col - 1).toString())) {
          count += 1;
        }

        if (color.includes((row - 1).toString() + "." + (col + 1).toString())) {
          count += 1;
        }

        if (count === 2 || count === 3) {
          //console.log('put into array',arr[i])
          newArray.push(arr[i]);
        }
      }
      setColor(newArray);
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

  const handleChange = (event) => {
    console.log("event", event.target.value);
    event.preventDefault();
    setColorOptions([...colorOptions, event.target.value]);
  };
  console.log(colorOptions);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container xs={2} spacing={1} style={{ height: "30px" }}>
        <Grid item><h3 style={{margin:'5%'}}>Display Colors: </h3></Grid>
         <Grid container style={{margin:'5%'}}>
          {colorOptions.map((value) => (
            <Grid item style={{margin:'2%'}}>{value} </Grid>
          ))}
          </Grid>
          <Grid container style={{margin:'5%'}}><h1>Generation: {count}</h1></Grid>
          <Grid container style={{margin:'5%'}}>
          <button onClick={() => setStart(true)}>Start</button>
          <button onClick={() => setStart(false)}>Stop</button>
          <button onClick={() => setColor([])}>Reset</button>
          </Grid>
          <Grid container style={{margin:'5%'}}><h3>Speed</h3></Grid>
          <Grid container style={{margin:'5%'}}>
           
          <button onClick={speedFaster}>Faster</button>
          <button onClick={speedSlower}>Slower</button>
          </Grid>
          <Grid container style={{margin:'5%'}}><h3>Size</h3></Grid>
          <Grid container style={{margin:'5%'}}>
          
          <button onClick={plus}>Bigger</button>
          <button onClick={minus}>Smaller</button>
          </Grid>
        </Grid>
        <button onClick={() => setColorOptions([])}>Clear Color Options</button>

        <div>
          <input type="text" onClick={handleChange} />
        </div>

        <Grid container className={classes.grid} justify="center" spacing={0}>
          {arr.map((value) => (
            <Box
              key={value}
              value={value}
              color={color}
              setColor={setColor}
              colorOptions={colorOptions}
              tall={tall}
            />
          ))}
        </Grid>
        {/* <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button onClick={() => setColor([])}>Reset</button>
        <br></br>
        <button onClick={speedFaster}>Faster</button>
        <button onClick={speedSlower}>Slower</button>
        <br></br>
        <button onClick={plus}>Bigger</button>
        <button onClick={minus}>Smaller</button> */}
      </Grid>
    </Grid>
  );
}
