import React from "react";
import Grid from "@material-ui/core/Grid";

const data = [
  { item: "item", value: "value" },
  { item: "Occasion", value: "Casual, Daily" },
  { item: "Occasion", value: "Casual, Daily" },
  { item: "Occasion", value: "Casual, Daily" },
];
export default function ProducatDescription() {
  return (
    <div>
      {data.map((i, index) => (
<<<<<<< HEAD
        <Grid key={index} container>
=======
        <Grid container>
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
          <Grid sm={2} xs={6}>
            <p> {i.item} </p>
          </Grid>
          <Grid sm={10} xs={6}>
            <p> {i.value} </p>
          </Grid>
        </Grid>
      ))}
<<<<<<< HEAD
      <p style={{ fontWeight: "bold", marginTop: "2rem", color: "red" }}>
        {" "}
        Please Note:
      </p>
=======
      <p style={{ fontWeight: "bold", marginTop: "2rem",color:"red" }}> Please Note:</p>
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
      <p>Please see the Size Reference to find the correct size.</p>
    </div>
  );
}
