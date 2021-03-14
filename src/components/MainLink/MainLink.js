import React from "react";
import { Link } from "react-router-dom";
import "./MainLink.css";
export default function MainLink({
  title,
  style,
  pathname,
  children,
  onClick,
  homestyle,
  mobView,
  ...otherProps
}) {
  return (
    <Link
      to={(location) => ({ ...location, pathname: pathname })}
      className={homestyle ? "homestyle" : mobView ? "mobView" : "linkColor"}
      onClick={onClick}
      {...otherProps}
    >
      {title}
      {children}
    </Link>
  );
}
