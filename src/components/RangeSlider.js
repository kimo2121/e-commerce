import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
// import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getPriceFilterArray } from "../redux/products/product.action";

// const priceSlider = [
//   { label: "Min", id: 1, type: "number" },
//   { label: "Max", id: 2, type: "number" },
// ];

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "2rem auto",
  },
});

const RangeSlider = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.products.filter);
  let min = parseInt(filter[0]?.current_price);
  let max = parseInt(filter[filter.length - 1]?.current_price);

  const classes = useStyles();
  const [values, setValues] = React.useState({
    min,
    max,
  });

  useEffect(() => {
    let min = parseInt(filter[0]?.current_price);
    let max = parseInt(filter[filter.length - 1]?.current_price);
    setValues({ min, max });
  }, [filter]);
  const [value, setValue] = React.useState([min, max]);

  useEffect(() => {
    dispatch(getPriceFilterArray(value));
  }, [value,dispatch]);

  //   console.log({ min });
  //   console.log({ max });
  //   console.log({ value });
  //   console.log({ values });

  //   const onChange = (event) => {
  //     setValue({ ...value, });
  //   };
  // const onChange = (event, newValue) => {
  //   // console.log(newValue);
  //   // setValues({ ...values, [event.target.name]: event.target.value });
  //   // value && setValue(newValue);
  // };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
        step={values.max / 10}
        min={values.min}
        max={values.max}
      />
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          id="standard-basic"
          label="min"
          style={{ width: "40%" }}
          name="min"
          //   value={value[0]}
          value={values.min}
          onChange={onChange}
        />
        <TextField
          id="standard-basic"
          label="max"
          style={{ width: "40%" }}
          name="max"
          //   value={value[1]}
          value={values.max}
          onChange={onChange}
        />
      </div> */}
    </div>
  );
};

export default RangeSlider;
