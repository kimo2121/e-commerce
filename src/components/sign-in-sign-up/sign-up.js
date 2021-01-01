import React from "react";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";
import SignForm from "../sign-form/sign-form";
import "./sign-in-sign-up.css";
const SignUp = () => {
  return (
    <div style={{ marginLeft: "15%" }}>
      <h1 style={{ marginBottom: "10%" }}>Register</h1>
      <SignForm />
      <span>
        By creating your account, you agree to our{" "}
        <Link to="/sign-in-up">
          Terms &<br /> Conditions
        </Link>{" "}
        and <Link to="/sign-in-up">Privacy Policy</Link>
      </span>
      <Form>
        <Form.Checkbox
          style={{ marginTop: "10%" }}
          label="Follow us to get newest information"
        />

        <Form.Button color="black" style={{ width: "23rem" }}>
          Register
        </Form.Button>
      </Form>
    </div>
  );
};

export default SignUp;
