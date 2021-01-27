import React from "react";
import { Form, Label } from "semantic-ui-react";
import "./address-form.scss";
import { CountryOptions } from "./CountryData";
import { useForm } from "../../util/hooks";
import { useMutation, gql, useQuery } from "@apollo/react-hooks";
import { GET_USER_QUERY, UPDATE_USER } from "../../util/graphql";
import MesageSemanticUI from "../MesageSemanticUI";
import { useSelector } from "react-redux";

const NameData = [
  { label: "First Name", id: 88745, name: "FirstName" },
  { label: "Last Name", id: 58545, name: "LastName" },
];
const FieldData = [
  { label: "State", id: 60257, name: "State" },
  { label: "City", id: 45347, name: "City" },
  { label: "Address", id: 78542, name: "Address" },
  { label: "Address 2", id: 25126, name: "Address_2" },
  { label: "ZIP/postal code", id: 85457, name: "postal_code" },
  { label: "Phone", id: 54521, name: "Phone", type: "number" },
];

const AddressForm = ({ isCheckoutComponent }) => {
  const user = useSelector((state) => state.user.user);
  const [errors, setErrors] = React.useState({});
  console.log({ errors });
  const { onChange, onSubmit, values, setValues } = useForm(
    updateUserCallback,
    {
      FirstName: "",
      LastName: "",
      State: "",
      Country: "",
      City: "",
      Address: "",
      Address_2: "",
      postal_code: "",
      Phone: "",
      defaultAddrses: false,
    }
  );
  console.log({ values });
  const [
    updateUser,
    //  { loading }
  ] = useMutation(UPDATE_USER, {
    update(_, { data: { updateUser: userData } }) {
      console.log({ userData });
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: { address: values },
  });

  function updateUserCallback() {
    updateUser();
  }
  const handleCheckboxChange = (e, { value }) => {
    setValues({ ...values, defaultAddrses: !values.defaultAddrses });
    // console.log({ values });
  };
  const handleChange = (e, { value }) => {
    console.log({ value });
    setValues({ ...values, Country: value });
  };

  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: { userId: user?.id },
  });
  return (
    <div
      className={
        isCheckoutComponent ? "checkout-address-form" : "address-book-form"
      }
    >
      <Form style={{ marginLeft: "6.5%" }} onSubmit={onSubmit}>
        <Form.Group widths="equal" style={{ display: "flex" }}>
          <label className="input-label">Your name :</label>
          {NameData.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                marginRight: "1.5%",
                marginBottom: "3%",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Form.Input
                  type={item.type}
                  key={item.id}
                  placeholder={item.label}
                  style={{ width: "17vw" }}
                  fluid
                  inline
                  onChange={onChange}
                  name={item.name}
                  value={values && values[item.name]}
                />
                {errors[item.name] && (
                  <Label basic color="red" pointing>
                    {errors[item.name]}
                  </Label>
                )}
              </div>
            </div>
          ))}
        </Form.Group>
        <Form.Group>
          <label className="input-label">Country :</label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Form.Select
              style={{
                width: "35vw",
                marginBottom: "5%",
                // marginLeft: "1.1%",
              }}
              placeholder="Select Country"
              fluid
              selection
              options={CountryOptions}
              onChange={handleChange}
              name="Country"
              // value={CountryOptions.text}
            />
            {errors.Country && (
              <Label basic color="red" pointing>
                {errors["Country"]}
              </Label>
            )}
          </div>
        </Form.Group>
        <Form.Group widths="equal" style={{ display: "inline-block" }}>
          {FieldData.map((item) => (
            <div key={item.id} style={{ display: "flex", marginBottom: "5%" }}>
              <label className="input-label">{item.label} :</label>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Form.Input
                  type={item.type}
                  key={item.id}
                  placeholder={item.label}
                  style={{ width: "35vw" }}
                  fluid
                  inline
                  onChange={onChange}
                  name={item.name}
                  value={values && values[item.name]}
                />
                {errors[item.name] && (
                  <Label basic color="red" pointing>
                    {errors[item.name]}
                  </Label>
                )}
              </div>
            </div>
          ))}
        </Form.Group>
        <div style={{ display: "flex" }}>
          <Form.Checkbox
            className="address-form-checkbox"
            label="Set this as your default shipping address."
            name={values && values.defaultAddrses}
            value={values && values.defaultAddrses}
            onChange={handleCheckboxChange}
          />
        </div>

        <Form.Button color="pink" className="confirm-edit1" type="submit">
          Confirm edit
        </Form.Button>
      </Form>
    </div>
  );
};

export default AddressForm;
