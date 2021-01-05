import React, { useState } from "react";
import { Link } from "react-router-dom";

const defualtStyles = {
  border: "1px solid black",
  borderRadius: "6px",
  margin: "0 1rem",
  padding: ".3rem",
  background: "white",
  position: "relative",
};
const styles = {
  border: "1px solid black",
  borderRadius: "6px",
  margin: "0 1rem",
  padding: ".3rem",
  background: "black",
  color: "grey ",
  position: "relative",
};

export default function HeaderItem({ data }) {
  const [activeLink, setactiveLink] = useState({ index: "", active: false });
  return (
    <div style={{ display: "flex" }}>
      {data.map((i, index) => (
        <div
          key={index}
          style={
            activeLink.index === index && activeLink.active
              ? styles
              : defualtStyles
          }
        >
          <Link
            to={window.location.pathname}
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
