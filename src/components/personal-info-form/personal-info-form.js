import React, { useState } from "react";
import "./personal-info-form.scss";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-date-picker";
import {
  inputInfo,
  radioInfo,
  PreferenceInfo,
  passowordInfo,
} from "./personal-info-data";
import { useForm } from "../../util/hooks";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { UPDATE_USER, GET_USER_QUERY } from "../../util/graphql";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user/user.actions";

const PersonalInfoForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  console.log({ user });
  const [date, setDate] = useState(new Date());
  const [errors, setErrors] = React.useState({});
  console.log({ errors });
  const { onChange, onSubmit, values, setValues } = useForm(
    updateUserCallback,
    {
      username: user.username ? user.username : "",
      email: user.email ? user.email : "",
      gender: user.gender ? user.gender : "",
      phone: user.phone ? user.phone : "",
      birthDate: user.birthDate ? user.birthDate : date,
      Preference_categorie: {
        women: user.Preference_categorie.women
          ? user.Preference_categorie.women
          : false,
        bags: user.Preference_categorie.bags
          ? user.Preference_categorie.bags
          : false,
        beauty: user.Preference_categorie.beauty
          ? user.Preference_categorie.beauty
          : false,
        accessories: user.Preference_categorie.accessories
          ? user.Preference_categorie.accessories
          : false,
        kids: user.Preference_categorie.kids
          ? user.Preference_categorie.kids
          : false,
        men: user.Preference_categorie.men
          ? user.Preference_categorie.men
          : false,
        shoes: user.Preference_categorie.shoes
          ? user.Preference_categorie.shoes
          : false,
        jewelry: user.Preference_categorie.jewelry
          ? user.Preference_categorie.jewelry
          : false,
        home: user.Preference_categorie.home
          ? user.Preference_categorie.home
          : false,
      },
    }
  );
  console.log({ values });
  const [
    updateUser,
    //  { loading }
  ] = useMutation(UPDATE_USER, {
    update(_, { data: { updateUser: userData } }) {
      console.log({ userData });
      dispatch(userData !== undefined && login(userData));
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function updateUserCallback() {
    updateUser();
  }

  const handleCheckboxChange = (e, { value }) => {
    setValues({
      ...values,
      Preference_categorie: {
        ...values.Preference_categorie,
        [value]: !values.Preference_categorie[value],
      },
    });
  };
  const handleChange = (e, { value }) => {
    console.log({ value });
    setValues({ ...values, gender: value });
  };

  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: { userId: user?.id },
  });
  console.log({ data });

  return (
    <Form className="form-personal-info" onSubmit={onSubmit}>
      <Form.Group
        widths="equal"
        style={{ display: "inline-block", marginBottom: "0%" }}
      >
        {inputInfo.map((item) => (
          <div key={item.id} style={{ display: "flex", marginBottom: "5%" }}>
            <label className="input-label">{item.label}:</label>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Form.Input
                type={item.type}
                style={{ width: "45vw" }}
                fluid
                inline
                onChange={onChange}
                name={item.name}
                value={values[item.name]}
              />
              {errors[item.name] && (
                <Label basic color="red" pointing>
                  {errors[item.name]}
                </Label>
              )}
              {/* <p style={{ color: "red" }}>{errors[item.name]} </p> */}
            </div>
          </div>
        ))}
      </Form.Group>
      <Form.Group inline style={{ marginBottom: "5%" }}>
        <span style={{ marginLeft: "-1%" }} className="input-label">
          Gender:
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="radio-choices">
            {radioInfo.map((item) => (
              <Form.Radio
                style={{ left: "0%" }}
                key={item.id}
                label={item.label}
                name={item.name}
                value={item.name}
                onChange={handleChange}
                checked={values.gender === item.name}
              />
            ))}
          </div>
          {errors.gender && (
            <Label basic color="red" pointing>
              {errors.gender}
            </Label>
          )}
        </div>
      </Form.Group>
      <Form.Group style={{ display: "flex", marginBottom: "5%" }}>
        <label className="input-label">Birth date:</label>
        <DatePicker
          placeholder="none"
          format="MM-dd-y"
          minDate={new Date("01-01-1940")}
          maxDate={new Date("12-31-2020")}
          onChange={setDate}
          value={date}
        />
        {console.log({ date })}
      </Form.Group>
      <Form.Group style={{ display: "block" }}>
        <span className="label-info">Preference categories:</span>
        <div className="Preference-categories">
          {PreferenceInfo.map((item) => (
            <div key={item.id} className="checkout-input">
              <Form.Checkbox
                style={{ marginTop: "10%" }}
                label={item.label}
                onChange={handleCheckboxChange}
                name={item.value}
                value={item.value}
                checked={values.Preference_categorie[item.value]}
              />
            </div>
          ))}
        </div>
      </Form.Group>
      <Form.Button color="pink" className="confirm-edit1" type="submit">
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
                style={{ width: "45vw" }}
                fluid
                inline
                onChange={onChange}
                name={item.name}
                value={values && values[item.name]}
              />
            </div>
          ))}
        </div>
      </Form.Group>
      <Form.Button className="confirm-edit1" color="pink">
        Confirm edit
      </Form.Button>
    </Form>
  );
};

export default PersonalInfoForm;
