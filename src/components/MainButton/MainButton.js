import React from "react";
import Button from "@material-ui/core/Button";

<<<<<<< HEAD
export default function MainButton({ children, title, style }) {
=======
export default function MainButton({ children, title }) {
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
  return (
    <Button
      variant="contained"
      color="primary"
<<<<<<< HEAD
      style={style ? style : { width: "20vw", marginRight: "1rem" }}
=======
      style={{ width: "20vw", marginRight: "1rem" }}
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
    >
      {children}
      {title}
    </Button>
  );
}
