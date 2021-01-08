import React from "react";
import { Link } from "react-router-dom";
import "./MainLink.css";
export default function MainLink({ title, style, pathname }) {
  return (
    <Link
      to={(location) => ({ ...location, pathname: pathname })}
      className="linkColor"
    >
      {title}
      {/* {`${name.slice(0, 25)}...`} */}
    </Link>
  );
}
