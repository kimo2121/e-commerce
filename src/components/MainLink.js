import React from "react";
import { Link } from "react-router-dom";

export default function MainLink({ title, style, pathname }) {
  return (
    <Link
      style={{ color: "black " }}
      to={(location) => ({ ...location, pathname: pathname })}
    >
      {title}
      {/* {`${name.slice(0, 25)}...`} */}
    </Link>
  );
}
