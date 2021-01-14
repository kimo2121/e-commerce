import React, { useState } from "react";
import "./personal-info-form.css";
import { Form } from "semantic-ui-react";
import DatePicker from "react-date-picker";
import {
  inputInfo,
  radioInfo,
  PreferenceInfo,
  passowordInfo,
} from "./personal-info-data";

const PersonalInfoForm =  () => {
  const [state, setState] = useState({});
  const [date, setDate] = useState(new Date());
  const handleChange = (e, { value }) => {
    setState({ value });
  };
  const { value } = state;
  return (
    <Form className="form-personal-info">
      <Form.Group
        widths="equal"
        style={{ display: "inline-block", marginBottom: "0%" }}
      >
        {inputInfo.map((item) => (
          <div key={item.id} style={{ display: "flex", marginBottom: "5%" }}>
            <label className="input-label">{item.label}:</label>
            <Form.Input
              type={item.type}
              style={{ width: "23rem" }}
              fluid
              inline
            />
          </div>
        ))}
      </Form.Group>
      <Form.Group inline style={{ marginBottom: "5%" }}>
        <span style={{ marginLeft: "-1%" }} className="input-label">
          Gender:
        </span>
        {radioInfo.map((item) => (
          <Form.Radio
            style={{ left: "0%" }}
            key={item.id}
            label={item.label}
            value={item.value}
            checked={value === item.value}
            onChange={handleChange}
          />
        ))}
      </Form.Group>
      <Form.Group style={{ display: "flex", marginBottom: "5%" }}>
        <label className="input-label">Birth date:</label>
        <DatePicker
          placeholder="none"
          format="MM-dd-y"
          onChange={setDate}
          value={date}
          minDate={new Date("01-01-1940")}
          maxDate={new Date("12-31-2020")}
        />
      </Form.Group>
      <Form.Group style={{ display: "block" }}>
        <span className="label-info">Preference categories:</span>
        <div className="Preference-categories">
          {PreferenceInfo.map((item) => (
            <div key={item.id} style={{marginRight:'20%'}}>
              <Form.Checkbox style={{ marginTop: "10%" }} label={item.label} />
            </div>
          ))}
        </div>
      </Form.Group>
      <Form.Button color="pink" className="confirm-edit1">
        Confirm edit
      </Form.Button>
      <Form.Group>
        <div>
          <span className="label-info">Change Password:</span>
          {passowordInfo.map((item) => (
            <div key={item.id} style={{ display: "flex", marginTop: "4%" }}>
              <label className="input-label">{item.label}:</label>
              <Form.Input
                type="password"
                style={{ width: "23rem" }}
                fluid
                inline
              />
            </div>
          ))}
        </div>
      </Form.Group>
      <Form.Button
        className="confirm-edit1"
        color="pink"
        style={{ left: "50%" }}
      >
        Confirm edit
      </Form.Button>
    </Form>
  );
};

export default PersonalInfoForm;
