import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

export default function SimpleMenu({ data, icon, itemIcon, onClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        {/* <MenuIcon /> */}
        {icon}
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {data.map((i) => (
          <Link to={i.link} style={{ color: "black" }} onClick={i.title === "Logout" && onClick}>
            <MenuItem onClick={handleClose}>
              {i.title === "Logout" ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <hr style={{ width: "100%" }} />
                  {itemIcon} {i.title}
                </div>
              ) : (
                i.title
              )}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
