import React, { useState } from "react";
import { Link } from "react-router-dom";

const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";
const styles = {
  width: "2rem",
  height: "2rem",
  margin: ".2rem",
  objectFit: "contain",
  //   border: "1px solid black",
  padding: "1px",
};
const activeStyles = {
  width: "2.5rem",
  height: "2.5rem",
  margin: ".2rem",
  objectFit: "contain",
  border: "1px solid black",
  padding: "4px",
};

export default function ProductImgList({ isSingleProduct }) {
  const [activeLink, setactiveLink] = useState({ index: 0, active: true });
  return (
    <div>
      {Array(4)
        .fill()
        .map((i, index) => (
          <Link
            style={{ color: "black" }}
            // onClick={() => setactiveLink({ index, active: !activeLink.active })}
            onClick={() => setactiveLink({ index, active: true })}
          >
            <img
              src={img}
              alt="product"
              //   className="smallImg"
              style={
                isSingleProduct &&
                activeLink.index === index &&
                activeLink.active
                  ? activeStyles
                  : styles
              }
            />
          </Link>
        ))}
    </div>
  );
}
