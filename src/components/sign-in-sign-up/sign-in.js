import React from "react";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";
import GoogleSiginIn from "../google-login/google-sign-in";
import GoogleSignOut from "../google-logout/google-sign-out";
import SignForm from "../sign-form/sign-form";
import "./sign-in-sign-up.css";

const SignIn = () => {
  return (
    <div style={{ marginLeft: "15%", position: "relative" }}>
      <h1 style={{ marginBottom: "10%" }}>Sign In</h1>
      <SignForm />
      <Form>
        <Form.Button color="black" style={{ width: "23rem" }}>
          Sign in
        </Form.Button>
        <Link to="/sign-in-up" style={{ color: "#979797" }}>
          Forgot your password?
        </Link>
        <button className="sign-in-divider">
          <span
            style={{
              backgroundColor: "white",
              paddingLeft: "2%",
              paddingRight: "2%",
            }}
          >
            OR
          </span>
        </button>

        <GoogleSiginIn />
        {/* <GoogleSignOut /> */}
      </Form>
      <span>
        By sign in this way, you agree to our{" "}
        <Link to="/sign-in-up">
          Terms &<br /> Conditions
        </Link>{" "}
        and <Link to="/sign-in-up">Privacy Policy</Link>
      </span>
    </div>
  );
};

export default SignIn;
