import React from "react";
import { Grid } from "@material-ui/core";
import SignIn from "../../components/sign-in-sign-up/sign-in";
import SignUp from "../../components/sign-in-sign-up/sign-up";
import "./sign-page.css";

const SignInSignUp = () => {
  return (
    <div className="sign-page">
      <div className="sign-page-container">
        <Grid container spacing={3}>
          <Grid item sm xs style={{ width: "80%" }}>
            <SignIn />
          </Grid>
          <div className="sign-page-divider"></div>
          <Grid item sm xs style={{ width: "80%" }}>
            <SignUp />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SignInSignUp;
