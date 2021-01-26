import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

const headerItmes = [
  { name: "Categories" },
  { name: "Down & Parkas" },
  { name: "Jackets" },
  { name: "Vests" },
  { name: "OverCoats" },
  { name: "Blazers" },
];
export default function HeaderItem({ data }) {
  const [activeLink, setactiveLink] = useState({ index: "", active: false });

  return (
    <div style={{ display: "flex" }}>
      {headerItmes.map((i, index) => (
        <div
          style={{
            border: "1px solid black",
            borderRadius: "6px",
            margin: "0 1rem",
            padding: ".6rem",
            background: "white",
            position: "relative",
          }}
        >
          <Link
            // to={link.name}
            style={{ color: "black" }}
            onClick={() => setactiveLink({ index, active: true })}
          >
            {i.name}
          </Link>

          {activeLink.index === index && activeLink.active && (
            <CloseIcon
              style={{
                fontSize: "1rem",
                position: "absolute",
                top: "2px",
                right: "1.5px",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
