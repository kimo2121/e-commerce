import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function SimpleMenu({ data, btnName }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [name, setName] = React.useState(data[0].item);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (name) => {
    setAnchorEl(null);
    setName(name);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ textTransform: "none" }}
      >
        {btnName} {name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {data.map((i, index) => (
          <MenuItem key={index} onClick={() => handleClose(i.item)}>
            {" "}
            {i.item}{" "}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
