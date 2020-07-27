import React from "react";
import Grid from "@material-ui/core/Grid";

const Box = ({col, row}) => {

  return <>
  <Grid item >
      {col}, {row}
  </Grid>
  </>;
};
export default Box;
