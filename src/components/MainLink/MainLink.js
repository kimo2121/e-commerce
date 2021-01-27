import React from "react";
import { Link } from "react-router-dom";
import "./MainLink.css";
export default function MainLink({
  title,
  style,
  pathname,
  children,
  onClick,
}) {
  return (
    <Link
      to={(location) => ({ ...location, pathname: pathname })}
      className="linkColor"
      onClick={onClick}
    >
      {title}
      {children}
      {/* {`${name.slice(0, 25)}...`} */}
    </Link>
  );
}
