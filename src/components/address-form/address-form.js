import React from "react";
import { Form } from "semantic-ui-react";
import "./address-form.css";
import { CountryOptions } from "./CountryData";
const NameData = [
  { label: "First Name", id: 88745 },
  { label: "Last Name", id: 58545 },
];
const FieldData = [
  { label: "State/province", id: 60257 },
  { label: "City", id: 45347 },
  { label: "Address", id: 78542 },
  { label: "Address 2", id: 25126 },
  { label: "ZIP/postal code", id: 85457 },
  { label: "Phone", id: 54521 },
];
const AddressForm = () => {
  return (
    <div className="address-book-form">
      <Form style={{ marginLeft: "6.5%" }}>
        <Form.Group widths="equal" style={{ display: "flex" }}>
          <label style={{ marginRight: "4.4%" }}>Your name :</label>
          {NameData.map((item) => (
            <div key={item.id} style={{ display: "flex", marginRight: "1.8%" }}>
              <Form.Input
                type={item.type}
                key={item.id}
                placeholder={item.label}
                style={{ width: "11.9rem" }}
                fluid
                inline
              />
            </div>
          ))}
        </Form.Group>
        <Form.Group>
          <label>Country/region :</label>
          <Form.Select
            style={{
              width: "25rem",
              marginTop: "1.5%",
              marginBottom: "1.5%",
              marginLeft: "1.1%",
            }}
            placeholder="Select Country"
            fluid
            selection
            options={CountryOptions}
          />
        </Form.Group>
        <Form.Group widths="equal" style={{ display: "inline-block" }}>
          {FieldData.map((item) => (
            <div key={item.id} style={{ display: "flex", marginBottom: "5%" }}>
              <label className="input-label">{item.label} :</label>
              <Form.Input
                type={item.type}
                key={item.id}
                placeholder={item.label}
                style={{ width: "25rem" }}
                fluid
                inline
              />
            </div>
          ))}
        </Form.Group>
        <Form.Checkbox
          style={{ width: "25vw", marginTop: "2%", left: "12.4%" }}
          label="Set this as your default shipping address"
        />
        <Form.Button color="pink" className="confirm-edit">
          Confirm edit
        </Form.Button>
      </Form>
    </div>
  );
};

export default AddressForm;
