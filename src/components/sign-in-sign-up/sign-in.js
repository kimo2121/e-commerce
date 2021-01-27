import React from "react";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";
// import GoogleSiginIn from "../google-login/google-sign-in";
// import GoogleSignOut from "../google-logout/google-sign-out";
import SignForm from "../sign-form/sign-form";
import "./sign-in-sign-up.scss";
import { useMutation, gql } from "@apollo/react-hooks";
import { useForm } from "../../util/hooks";
// import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user/user.actions";
import SimpleBackdrop from "../BackDrop";

const SignIn = ({ handleClose, handleToggle }) => {
  // let history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = React.useState({});
  console.log({ errors });

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      console.log({ userData });
      localStorage.setItem("jwtToken", userData.token);
      dispatch(login(userData));
      // history.push("/");
      window.location.replace("http://localhost:3000/");
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
    <div style={{ marginBottom: "8%" }} className="sign-form-main-div">
      <SimpleBackdrop
        open={loading}
        handleClose={handleClose}
        handleToggle={handleToggle}
      />

      <h1 style={{ marginBottom: "10%" }}>Sign In</h1>
      <p>{errors?.general}</p>
      <SignForm onChange={onChange} values={values} signIn errors={errors} />
      <Form onSubmit={onSubmit}>
        <Form.Button fluid color="black" className="sign-form-btn">
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

        {/* <GoogleSiginIn className="google-btn" /> */}
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
