import React, { useState } from "react";
import { Link } from "react-router-dom";

const defualtStyles = {
  border: "1px solid black",
  borderRadius: "6px",
<<<<<<< HEAD
  margin: " .5rem",
=======
  margin: "0 1rem",
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
  padding: ".3rem",
  background: "white",
  position: "relative",
};
const styles = {
  border: "1px solid black",
  borderRadius: "6px",
<<<<<<< HEAD
  margin: " .5rem",
=======
  margin: "0 1rem",
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
  padding: ".3rem",
  background: "black",
  color: "grey ",
  position: "relative",
};

<<<<<<< HEAD
export default function HeaderItem({ data, category, subcategory }) {
  const [activeLink, setactiveLink] = useState({
    index: 0,
    active: true,
  });
  // console.log({ data });
  // console.log({ category });
  return (
    <div style={{ display: "flex", flexFlow: "wrap" }}>
=======
export default function HeaderItem({ data, category }) {
  const [activeLink, setactiveLink] = useState({ index: "", active: false });
  return (
    <div style={{ display: "flex" }}>
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
      {data.map((item, index) => (
        <div
          key={index}
          style={
<<<<<<< HEAD
            (activeLink.index === index && activeLink.active) ||
            subcategory === item
=======
            activeLink.index === index && activeLink.active
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
              ? styles
              : defualtStyles
          }
        >
          <Link
            to={`/${category && category}/${item}`}
            style={{
              color:
<<<<<<< HEAD
                (activeLink.index === index && activeLink.active) ||
                subcategory === item
=======
                activeLink.index === index && activeLink.active
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
                  ? "white"
                  : "black",
            }}
            onClick={() => setactiveLink({ index, active: true })}
          >
            {item}
          </Link>
        </div>
      ))}
    </div>
  );
}
