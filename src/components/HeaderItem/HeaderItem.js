import React, { useState } from "react";
import { Link } from "react-router-dom";

const defualtStyles = {
  border: "1px solid black",
  borderRadius: "6px",
  margin: "0 1rem",
<<<<<<< HEAD
  padding: ".3rem",
=======
  padding: ".6rem",
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
  background: "white",
  position: "relative",
};
const styles = {
  border: "1px solid black",
  borderRadius: "6px",
  margin: "0 1rem",
<<<<<<< HEAD
  padding: ".3rem",
=======
  padding: ".6rem",
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
  background: "black",
  color: "grey ",
  position: "relative",
};

export default function HeaderItem({ data }) {
  const [activeLink, setactiveLink] = useState({ index: "", active: false });
  return (
<<<<<<< HEAD
    <div style={{ display: "flex", }}>
=======
    <div style={{ display: "flex" }}>
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
      {data.map((i, index) => (
        <div
          style={
            activeLink.index === index && activeLink.active
              ? styles
              : defualtStyles
          }
        >
          <Link
            style={{
              color:
                activeLink.index === index && activeLink.active
                  ? "white"
                  : "black",
            }}
            onClick={() => setactiveLink({ index, active: true })}
          >
            {i.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
