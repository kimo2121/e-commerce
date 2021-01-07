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

<<<<<<< HEAD
export default function ProductImgList({
  isSingleProduct,
  style,
  data,
  setImage,
}) {
  const [activeLink, setactiveLink] = useState({ index: 0, active: true });
  const imgs = [
    data && data.variation_0_image !== "" && data.variation_0_image,
    data && data.variation_1_image !== "" && data.variation_1_image,
    data && data.image_url !== "" && data.image_url,
  ];
  return (
    <div>
      {imgs.map((i, index) => (
        <Link
          to={window.location.pathname}
          style={{ color: "black" }}
          // onClick={() => setactiveLink({ index, active: !activeLink.active })}
          onClick={() => {
            setactiveLink({ index, active: true });
            setImage(i);
          }}
        >
          {i !== "" && (
            <img
              src={i}
=======
export default function ProductImgList({ isSingleProduct, style }) {
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
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
              alt="product"
              //   className="smallImg"
              style={
                style
                  ? style
                  : isSingleProduct &&
                    activeLink.index === index &&
                    activeLink.active
                  ? activeStyles
                  : styles
              }
            />
<<<<<<< HEAD
          )}
        </Link>
      ))}
=======
          </Link>
        ))}
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
    </div>
  );
}
