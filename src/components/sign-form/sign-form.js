import React from "react";
import "./sign-form.css";
import { Form } from "semantic-ui-react";
const signinData = [
  { label: "E-mail address", id: 1021 },
  { label: "Password", id: 2021, type: "password" },
];
const SignForm = () => {
  return (
    <div>
      <Form style={{ marginLeft: "1.5%" }}>
        <Form.Group widths="equal" style={{ display: "block" }}>
          {signinData.map((item) => (
            <div key={item.id} style={{ marginBottom: "7%" }}>
              <Form.Input
                type={item.type}
                placeholder={item.label}
                style={{ width: "23rem" }}
                fluid
                inline
              />
            </div>
          ))}
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignForm;
