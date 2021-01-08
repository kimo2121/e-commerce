import React from "react";
import Button from "@material-ui/core/Button";

const MainButton = ({ children, title, ...otherProps }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      style={{ width: "20vw", marginRight: "1rem" }}
      {...otherProps}
    >
      {children}
      {title}
    </Button>
  );
};
export default MainButton;
