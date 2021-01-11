import React from "react";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";
import GoogleSiginIn from "../google-login/google-sign-in";
import GoogleSignOut from "../google-logout/google-sign-out";
import SignForm from "../sign-form/sign-form";
import "./sign-in-sign-up.css";
import { useMutation, gql } from "@apollo/react-hooks";
import { useForm } from "../../util/hooks";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  let history = useHistory();

  // const context = useContext(AuthContext);
  const [errors, setErrors] = React.useState({});
  console.log({ errors });

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: "",
    password: "",
  });

  const [
    loginUser,
    //  { loading }
  ] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      console.log({ userData });
      // localStorage.setItem("jwtToken", userData.token);
      // context.login(userData);
      history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <div style={{ marginLeft: "15%", position: "relative" }}>
      <h1 style={{ marginBottom: "10%" }}>Sign In</h1>
      <SignForm onChange={onChange} values={values} signIn />
      <Form onSubmit={onSubmit}>
        <Form.Button color="black" style={{ width: "23rem" }}>
          Sign in
        </Form.Button>
        <Link to="/sign-in-up" style={{ color: "#979797" }}>
          Forgot your password?
        </Link>
        <button className="sign-in-divider" type="submit">
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

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default SignIn;
