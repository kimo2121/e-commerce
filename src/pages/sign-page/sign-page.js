import React from "react";
import SignIn from "../../components/sign-in-sign-up/sign-in";
import SignUp from "../../components/sign-in-sign-up/sign-up";
import "./sign-page.scss";

const SignInSignUp = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="sign-page">
      <div>
        <div className="sign-page-container">
          <div className="sign-in-div">
            <SignIn
              open={open}
              handleClose={handleClose}
              handleToggle={handleToggle}
            />
          </div>
          <div className="sign-page-divider"></div>
          <div className="sign-up-div">
            <SignUp
              open={open}
              handleClose={handleClose}
              handleToggle={handleToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
