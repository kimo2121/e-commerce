import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from "@material-ui/icons/Person";
// import HomeIcon from "@material-ui/icons/Home";
import SimpleMenu from "./SimpleMenu";
import { Link } from "react-router-dom";
// import PopoverMUI from "./PopoverMUI";
// import CartDropdownMob from "./cart-dropdown/CartDropdownMob";
import Drawer from "./Drawer/Drawer";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
// import { Popup } from "semantic-ui-react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { selectCartItemsCount } from "../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
// import SearchComponent from "./search-component/search-component";
import MainLink from "./MainLink/MainLink";

import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import SearchComponent from "./search-component/search-component";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: "2rem",
  },
  menuButton: {
    margin: "0 .5rem",
    padding: "0",
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
  {
    title: "Logout",
    // link: "/account",
  },
];

export default function ButtonAppBar(props) {
  const { itemsCount } = useSelector(
    createStructuredSelector({
      itemsCount: selectCartItemsCount,
    })
  );
  const [showSearch, setShowSearch] = useState(false);
  console.log({ showSearch });
  const classes = useStyles();

  const logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.replace("https://e-shopping-time.netlify.app/");
  };

  const icons = [
    {
      icon: (
        <Link
          to="/"
          onClick={() => setShowSearch(!showSearch)}
          style={{ color: "white" }}
        >
          <SearchIcon />
        </Link>
      ),
    },
    {
      icon: (
        <Badge badgeContent={itemsCount} color="secondary">
          <MainLink pathname="/checkout">
            <ShoppingBasketIcon style={{ color: "white" }} />
          </MainLink>
        </Badge>
      ),
    },
  ];
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar
          style={
            {
              // height: "10vh",
              // position: "fixed",
            }
          }
        >
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Drawer />
              <Link to="/" style={{ color: "white", display: "flex" }}>
                <p style={{ fontSize: "1rem", marginTop: ".6rem" }}>Logo</p>
              </Link>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {icons.map((icon, indx) => (
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  key={indx}
                >
                  {icon.icon}
                </IconButton>
              ))}
              {localStorage.getItem("jwtToken") ? (
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                >
                  <SimpleMenu
                    data={data}
                    icon={<PersonIcon />}
                    itemIcon={<ExitToAppIcon />}
                    onClick={() => logout()}
                  />
                </IconButton>
              ) : (
                <Link
                  to="/sign-in-up"
                  style={{
                    color: "white",
                    display: "flex",
                    marginTop: ".5rem",
                  }}
                >
                  Login
                </Link>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <div
        style={{
          width: "100vw",
          top: "10vh",
          left: "0",
          position: "fixed",
          zIndex: "200",
        }}
      >
        {showSearch && <SearchComponent />}
      </div>
    </React.Fragment>
  );
}
