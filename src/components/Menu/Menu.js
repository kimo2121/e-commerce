import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function SimpleMenu({
  data,
  btnName,
  setFilterTerm,
  firstItem,
  icon,
  nameProp,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [name, setName] = React.useState(firstItem);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (name) => {
    setName(name);
    setFilterTerm(name);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ textTransform: "none", fontSize: "1rem" }}
      >
        {icon && icon}
        {nameProp ? (
          nameProp
        ) : (
          <span style={{ marginLeft: "5px" }}>
            {" "}
            {btnName} {name}
          </span>
        )}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {data.map((i, index) => (
          <MenuItem
            key={index}
            onClick={() => handleClose(i.item ? i.item : i)}
          >
            {i.item ? i.item : i}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
