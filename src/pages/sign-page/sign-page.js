import React from "react";
import SignIn from "../../components/sign-in-sign-up/sign-in";
import SignUp from "../../components/sign-in-sign-up/sign-up";
import "./sign-page.css";

const SignInSignUp = () => {
  return (
    <div className="sign-page">
      <div className="sign-page-container">
        <SignIn />
        <div className="sign-page-divider"></div>
        <SignUp />
      </div>
    </div>
  );
};

export default SignInSignUp;
