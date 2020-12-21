import React from "react";
import Button from "@material-ui/core/Button";

export default function MainButton({ children, title }) {
  return (
    <Button
      variant="contained"
      color="primary"
      style={{ width: "20vw", marginRight: "1rem" }}
    >
      {children}
      {title}
    </Button>
  );
}
