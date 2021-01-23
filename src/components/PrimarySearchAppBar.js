import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import SimpleMenu from "./SimpleMenu";
import { Link } from "react-router-dom";
import PopoverMUI from "./PopoverMUI";
import CartDropdownMob from "./cart-dropdown/CartDropdownMob";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-between",
    // position: "fixed",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

let data = [
  {
    title: "My Account",
    link: "/account",
  },
  {
    title: "Orders",
    link: "/account/orders",
  },
  {
    title: "My Wallet",
    link: "/account",
  },
];
const icons = [
  {
    icon: <SearchIcon />,
  },
  {
    icon: (
      <PopoverMUI icon={<ShoppingBasketIcon />}>
        <CartDropdownMob />
      </PopoverMUI>
    ),
  },
  {
    icon: <SimpleMenu data={data} icon={<PersonIcon />} />,
  },
];
export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ height: "10vh" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/" style={{ color: "white", display: "flex" }}>
              {/* <HomeIcon /> */}
              <p style={{ fontSize: "1rem" }}>Logo</p>
            </Link>
          </IconButton>

          <div style={{ marginLeft: "auto" }}>
            {icons.map((icon) => (
              <IconButton
                edge="start"
                // className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                {icon.icon}
              </IconButton>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
