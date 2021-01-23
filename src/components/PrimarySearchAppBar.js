import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from "@material-ui/icons/Person";
// import HomeIcon from "@material-ui/icons/Home";
import SimpleMenu from "./SimpleMenu";
import { Link } from "react-router-dom";
import PopoverMUI from "./PopoverMUI";
import CartDropdownMob from "./cart-dropdown/CartDropdownMob";
import Drawer from "./Drawer/Drawer";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
  selectCartItemsCount,
} from "../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-between",
    // position: "fixed",
    alignItems: "center",
    marginBottom: "2rem",
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

export default function ButtonAppBar() {
  const { itemsCount } = useSelector(
    createStructuredSelector({
      itemsCount: selectCartItemsCount,
    })
  );

  const classes = useStyles();

  const icons = [
    {
      icon: <SearchIcon />,
    },
    {
      icon: (
        <PopoverMUI
          icon={
            <Badge badgeContent={itemsCount} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          }
        >
          <div
            style={{
              width: "90vw",
              maxHeight: "70vh",
              overflow: "scroll",
            }}
          >
            <CartDropdownMob />
          </div>
        </PopoverMUI>
      ),
    },
    {
      icon: <SimpleMenu data={data} icon={<PersonIcon />} />,
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ height: "10vh" }}>
        <Toolbar>
          <Drawer />
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
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
