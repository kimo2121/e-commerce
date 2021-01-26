import React from "react";
import { styles } from "../../util/styles";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import { Progress } from "semantic-ui-react";

const sizes = [
  { text: "small", progress: "25" },
  { text: "Large", progress: "25" },
  { text: "True to size", progress: "50" },
];

export default function ReviewsHeader() {
  return (
    <div style={{ margin: "2rem 0" }}>
      <h1>Customers Reviews</h1>
      <Grid container style={{ background: styles.primary, padding: "2rem" }}>
        <Grid
          item
          sm={6}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>
            5.0/ <span style={{ fontSize: "1rem" }}>5.0</span>
          </h1>
          <Rating name="read-only" value={5} readOnly size="large" />
        </Grid>
        <Grid item sm={6} xs={12}>
          {sizes.map((i, index) => (
            <Grid key={index} container>
              <Grid item sm={2} xs={6}>
                <p> {i.text} </p>
              </Grid>
              <Grid item sm={10} xs={6} style={{ paddingTop: ".5rem" }}>
                <Progress
                  percent={i.progress}
                  progress
                  color="black"
                  size="small"
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
