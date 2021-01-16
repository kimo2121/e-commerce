import React from "react";
import "./sign-form.css";
import { Form, Label, Message } from "semantic-ui-react";
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

const SignForm = ({ onChange, values, signUp, errors }) => {
  const data = signUp ? signUpData : signInData;
  return (
    <div>
      <Form style={{ marginLeft: "1.5%" }}>
        <Form.Group widths="equal" style={{ display: "block" }}>
          {data &&
            data.map((item) => {
              // console.log("values", values && values[item.label]);

              return (
                <div
                  key={item.id}
                  style={{
                    marginBottom: "7%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
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
                  {errors && errors[item.label] && (
                    <Label basic color="red" pointing>
                      {errors && errors[item.label]}
                    </Label>
                  )}
                </div>
              );
            })}
          {errors?.general && <Message color="red">{errors?.general}</Message>}
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignForm;
