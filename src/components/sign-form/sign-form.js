import React from "react";
import "./sign-form.css";
import { Form } from "semantic-ui-react";
const signUpData = [
  { label: "username", id: 0, type: "text" },
  { label: "email", id: 1, type: "email" },
  { label: "password", id: 2, type: "password" },
  { label: "confirmPassword", id: 3, type: "password" },
];
const signInData = [
  { label: "email", id: 1, type: "email" },
  { label: "password", id: 2, type: "password" },
];

const SignForm = ({ onChange, values, signUp, signIn }) => {
  const data = signUp ? signUpData : signInData;
  return (
    <div>
      <Form style={{ marginLeft: "1.5%" }}>
        <Form.Group widths="equal" style={{ display: "block" }}>
          {data &&
            data.map((item) => {
              // console.log("values", values && values[item.label]);

              return (
                <div key={item.id} style={{ marginBottom: "7%" }}>
                  <Form.Input
                    type={item.type}
                    placeholder={item.label}
                    style={{ width: "23rem" }}
                    fluid
                    inline
                    name={item.label}
                    value={values && values[item.label]}
                    onChange={onChange}
                    // style={{ width: "50%" }}
                  />
                </div>
              );
            })}
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignForm;
