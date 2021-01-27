import React, { useEffect, useState } from "react";
import "./Filter.css";
import { Link, useHistory } from "react-router-dom";
import { Checkbox } from "semantic-ui-react";
import RangeSlider from "../RangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { getColorsFilter } from "../../util/util_functions";
import { getColorsFilterArray } from "../../redux/products/product.action";

export default function FilterItem() {
  const dispatch = useDispatch();
  const [colors, setColors] = React.useState([]);
  const filter = useSelector((state) => state.products.filter);
  // console.log({ filter });
  const [values, setValues] = useState({
    colors_family: [],
  });

  useEffect(() => {
    let colorsList = getColorsFilter(filter);
    // console.log({ colorsList });
    setColors(colorsList);
  }, [filter]);
  useEffect(() => {
    dispatch(getColorsFilterArray(values.colors_family));
  }, [values]);

  let history = useHistory();
  // console.log({ history });
  let pathname = history.location.pathname;

  const filterList = [
    { name: "Color", iconPlus: "+", iconMinus: "-" },
    // { name: "Size", iconPlus: "+", iconMinus: "-" },
    // { name: "Length", iconPlus: "+", iconMinus: "-" },
    // { name: "Occasion", iconPlus: "+", iconMinus: "-" },
    // { name: "Pattern", iconPlus: "+", iconMinus: "-" },
    // { name: "Thickness", iconPlus: "+", iconMinus: "-" },
    // { name: "Season", iconPlus: "+", iconMinus: "-" },
    // { name: "Material", iconPlus: "+", iconMinus: "-" },
    // { name: "Design Element", iconPlus: "+", iconMinus: "-" },
    // { name: "Lenght", iconPlus: "+", iconMinus: "-" },
    // { name: "Fit Typle", iconPlus: "+", iconMinus: "-" },
    // { name: "Waist Type", iconPlus: "+", iconMinus: "-" },
    // { name: "Collection", iconPlus: "+", iconMinus: "-" },
    // { name: "Brand", iconPlus: "+", iconMinus: "-" },
    {
      name: "Price Range",
      iconPlus: "+",
      iconMinus: "-",
      component: <RangeSlider />,
    },
  ];
  // const [show, setShow] = useState(false);
  const [activeLink, setactiveLink] = useState({ index: "", active: false });
  // console.log({ activeLink });
  // const onClick = (color_family) => {
  //   history.push(`${pathname}/?color_family=${color_family}`);
  // };

  const onChange = (event, { value }) => {
    if (values.colors_family.includes(value)) {
      let newValues = values.colors_family.filter((i) => i !== value);
      setValues({ colors_family: newValues });
    } else {
      setValues({ colors_family: [...values.colors_family, value] });
    }
  };
  console.log("colors", values.colors_family);

  return (
    <div>
      {filterList.map((i, index) => (
        <div>
          {/* <hr /> */}

          {/* <Link
            style={{ color: "black" }}
            onClick={() => setactiveLink({ index, active: !activeLink.active })}
          > */}
          <Link
            style={{ color: "black" }}
            onClick={() => setactiveLink({ index, active: !activeLink.active })}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                //   flexDirection: `${show ? "column" : ""}`,
                padding: "0px",
              }}
            >
              <p>{i.name} </p>
              <p className="plus">
                {activeLink.index === index
                  ? activeLink.active && i.iconMinus
                  : i.iconPlus}
              </p>
            </div>
          </Link>

          {activeLink.index === index &&
            activeLink.active &&
            (i.component ? (
              <span style={{ width: "20%" }}>
                <RangeSlider />
              </span>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {colors.map((color) => (
                  <Checkbox
                    label={color}
                    key={index}
                    onChange={onChange}
                    name={color}
                    value={color}
                    checked={values.colors_family.includes(color)}
                  />
                ))}
              </div>
            ))}

          <hr />
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
}
