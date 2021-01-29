import React, { useState } from "react";
import "./sign-in-sign-up.scss";
import { useMutation, gql } from "@apollo/react-hooks";
import { Link, useHistory } from "react-router-dom";
import { Form } from "semantic-ui-react";
import SignForm from "../sign-form/sign-form";
import { useForm } from "../../util/hooks";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user/user.actions";
import SimpleBackdrop from "../BackDrop";

const SignUp = ({ open, handleClose, handleToggle }) => {
  let history = useHistory();

  const [errors, setErrors] = useState({});
  console.log({ errors });
  const dispatch = useDispatch();

  const { onChange, onSubmit, values, setValues } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  });

  console.log({ history });
  // console.log({ values });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      console.log({ userData });
      localStorage.setItem("jwtToken", userData.token);
      dispatch(login(userData));
      // history.push("/");
      window.location.replace("https://e-shopping-time.netlify.app/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  const handleCheckboxChange = (e, { value }) => {
    setValues({ ...values, checkbox: !values.checkbox });
    // console.log({ values });
  };

  return (
    <div className="sign-form-main-div">
      <SimpleBackdrop
        open={loading}
        handleClose={handleClose}
        handleToggle={handleToggle}
      />

      <h1 style={{ marginBottom: "10%" }}>Register</h1>
      <Form onSubmit={onSubmit}>
        <SignForm onChange={onChange} values={values} signUp errors={errors} />
        <span>
          By creating your account, you agree to our{" "}
          <Link to="/sign-in-up">
            Terms &<br /> Conditions
          </Link>{" "}
          and <Link to="/sign-in-up">Privacy Policy</Link>
        </span>
        <Form.Checkbox
          style={{ marginTop: "10%" }}
          label="Follow us to get newest information"
          name={values && values.chckbox}
          value={values && values.chckbox}
          onChange={handleCheckboxChange}
        />
        <Form.Button
          fluid
          color="black"
          className="sign-form-btn"
          type="submit"
        >
          Register
        </Form.Button>
      </Form>
    </div>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
    $checkbox: Boolean
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
        checkbox: $checkbox
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default SignUp;
