import React, { useState } from "react";
import "./Filter.css";
import { Link } from "react-router-dom";
import { Checkbox } from "semantic-ui-react";

const filterList = [
  { name: "Color", iconPlus: "+", iconMinus: "-" },
  { name: "Size", iconPlus: "+", iconMinus: "-" },
  { name: "Length", iconPlus: "+", iconMinus: "-" },
  { name: "Occasion", iconPlus: "+", iconMinus: "-" },
  { name: "Pattern", iconPlus: "+", iconMinus: "-" },
  { name: "Thickness", iconPlus: "+", iconMinus: "-" },
  { name: "Season", iconPlus: "+", iconMinus: "-" },
  { name: "Material", iconPlus: "+", iconMinus: "-" },
  { name: "Design Element", iconPlus: "+", iconMinus: "-" },
  { name: "Lenght", iconPlus: "+", iconMinus: "-" },
  { name: "Fit Typle", iconPlus: "+", iconMinus: "-" },
  { name: "Waist Type", iconPlus: "+", iconMinus: "-" },
  { name: "Collection", iconPlus: "+", iconMinus: "-" },
  { name: "Brand", iconPlus: "+", iconMinus: "-" },
  { name: "Price Range", iconPlus: "+", iconMinus: "-" },
];
export default function FilterItem() {
  const [show, setShow] = useState(false);
  const [activeLink, setactiveLink] = useState({ index: "", active: false });
  console.log({ activeLink });

  return (
    <div>
      {filterList.map((i, index) => (
        <div>
          {/* <hr /> */}

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
                <Link style={{ color: "black" }}>
                  {activeLink.index === index
                    ? activeLink.active && i.iconMinus
                    : i.iconPlus}
                </Link>
              </p>
            </div>
            {activeLink.index === index && activeLink.active && (
              <div className="">
                <Checkbox label="color" />
                <Checkbox label="color" />
                <Checkbox label="color" />
                <Checkbox label="color" />
              </div>
            )}
            <hr />
          </Link>
        </div>
      ))}
    </div>
  );
}
