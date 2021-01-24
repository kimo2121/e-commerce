import React from "react";
import SignIn from "../../components/sign-in-sign-up/sign-in";
import SignUp from "../../components/sign-in-sign-up/sign-up";
import "./sign-page.scss";

const SignInSignUp = () => {
  return (
    <div className="sign-page">
      <div>
        <div className="sign-page-container">
          <div className="sign-in-div" >
            <SignIn />
          </div>
          <div className="sign-page-divider"></div>
          <div className="sign-up-div" >
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
