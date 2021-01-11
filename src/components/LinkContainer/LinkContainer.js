import React from "react";
import { Link } from "react-router-dom";

export default function LinkContainer({ to, title, onClick, childern }) {
  return (
    <Link to={to} onClick={onClick}>
      {title && title}
      {childern && childern}
    </Link>
  );
}
