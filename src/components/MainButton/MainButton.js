import React from "react";
import Button from "@material-ui/core/Button";

export default function MainButton({ children, title, style }) {
  return (
    <Button
      variant="contained"
      color="primary"
      style={style ? style : { width: "20vw", marginRight: "1rem" }}
    >
      {children}
      {title}
    </Button>
  );
}
