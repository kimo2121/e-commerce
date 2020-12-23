import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import "./account.css";
import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";
import ProductCard from "../../components/ProductCard/ProductCard";
import IconicComponent from "../../components/iconic-component/iconic-component";
import {
  IconData,
  MyAssets,
} from "../../components/iconic-component/iconic-data";
import MyAccountPanel from "../../components/account-panel/my-account-panel";
import { MyOrders,Assets } from "../../components/account-panel/panel-data";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    borderRadius: "0%",

    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    width: "100%",
  },
}));
const Account = () => {
  const classes = useStyles();
  return (
    <div className="account-page">
      <div
        className={classes.root}
        style={{
          marginLeft: "6%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "18%" }}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper
                style={{ height: "160vh", padding: "0px" }}
                className={classes.paper}
              >
                <div className="my-account-panel">
                  <Link
                    to="/account"
                    style={{
                      textAlign: "left",
                      fontSize: "18px",
                      margin: "0",
                      paddingLeft: "6%",
                    }}
                  >
                    My Account
                  </Link>
                  <div className="divider"></div>
                  <br />
                  <div className="my-orders">
                    <span>My Orders</span>

                    <br />
                    {MyOrders.map((item) => (
                      <MyAccountPanel icon={item.icon} name={item.name} />
                    ))}
                    
                  </div>
                  <br />
                  <div className="my-assets">
                    <span>My Assets</span>
                    <br />
                    {Assets.map((item) => (
                      <MyAccountPanel icon={item.icon} name={item.name} />
                    ))}
                  </div>
                  <br />
                  <div className="acc-info">
                    <span>Account Information</span>
                    <br />
                    <Link to="/account">
                      <HiIcons.HiOutlineUserCircle
                        className="icons"
                        size={16}
                      />{" "}
                      Personal Info
                    </Link>
                    <br />
                    <Link to="/account">
                      <HiIcons.HiOutlineMail className="icons" size={16} />{" "}
                      Email Preferences
                    </Link>
                    <br />
                    <Link to="/account">
                      <HiIcons.HiOutlineLocationMarker
                        className="icons"
                        size={16}
                      />{" "}
                      Address Book
                    </Link>
                    <br />
                    <Link to="/account">
                      <HiIcons.HiOutlineHeart className="icons" size={16} /> My
                      Wishlist
                    </Link>
                    <br />
                    <Link to="/account">
                      <GiIcons.GiPirateCoat className="icons" size={16} /> My
                      Outfits
                    </Link>
                    <br />
                    <Link to="/account">
                      <FiIcons.FiStar className="icons" size={16} /> My Reviews
                    </Link>
                    <br />
                    <Link to="/account">
                      <HiIcons.HiOutlineQuestionMarkCircle
                        className="icons"
                        size={16}
                      />{" "}
                      My Questions
                    </Link>
                    <br />
                    <Link to="/account">
                      <HiIcons.HiOutlineShieldExclamation
                        className="icons"
                        size={16}
                      />{" "}
                      Change Password
                    </Link>
                  </div>
                  <br />
                  <div className="prog-center">
                    <span>Program Center</span>
                    <br />
                    <Link to="/account">
                      <HiIcons.HiOutlineSupport className="icons" size={16} />{" "}
                      Affiliate Center
                    </Link>
                    <br />
                    <Link to="/account">
                      <HiIcons.HiOutlineTag className="icons" size={16} />{" "}
                      Wholesale Center
                    </Link>
                    <br />
                    <Link to="/account">
                      <HiIcons.HiOutlineExclamation
                        className="icons"
                        size={16}
                      />{" "}
                      Drop-ship info & rules
                    </Link>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <div style={{ width: "74%", marginLeft: "1.5%" }}>
          <Grid container spacing={2}>
            <Grid style={{ marginLeft: "0%" }} item xs={12}>
              <Paper
                style={{
                  padding: "0",
                  marginLeft: "0%",
                  height: "35vh",
                  display: "flex",
                  flexWrap: "wrap",
                }}
                className={classes.paper}
              >
                <span className="divider2">My Assets</span>
                <div className="profile-picture">
                  <div className="edit-prof-pic">
                    NC
                    <button className="edit">
                      <HiIcons.HiPencil size={23} />
                    </button>
                  </div>
                  <span>Jhon Wick</span>
                  <br />
                  <Link to="/account">Email: jhonwick@exp.com</Link>
                  <br />
                  <span className="exp-amount">NC EXP 0</span>
                </div>
                <div style={{ marginLeft: "23%", display: "flex" }}>
                  {MyAssets.map((item) => (
                    <IconicComponent
                      value={item.value}
                      title={item.title}
                      link={item.link}
                      isMyAssets
                    />
                  ))}
                </div>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper
                style={{
                  padding: "0",
                  height: "65vh",
                }}
                className={classes.paper}
              >
                <span className="divider3">My Orders</span>
                <div style={{ display: "flex", height: "30%" }}>
                  {IconData.map((item) => (
                    <IconicComponent name={item.name} icon={item.icon} />
                  ))}
                </div>
                <div className="divider4">
                  <span>Products</span>
                  <span>Order status</span>
                  <span>Operate</span>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={{ height: "40vh" }} className={classes.paper}>
                <span className="divider5">Interactive center</span>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    height: "47%",
                  }}
                >
                  <div className="interactive-center-tags check-in-tag">
                    <RiIcons.RiCalendarCheckLine
                      className="svg-icons"
                      size={28}
                    />
                    <br />
                    <span>Check In</span>
                  </div>
                  <div className="interactive-center-tags lottery-tag">
                    <CgIcons.CgPerformance className="svg-icons" size={28} />
                    <br />
                    <span>Lottery activity</span>
                  </div>
                  <div className="interactive-center-tags vote-tag">
                    <FaIcons.FaVoteYea className="svg-icons" size={28} />
                    <br />
                    <span>Vote</span>
                  </div>
                  <div className="interactive-center-tags make-money-tag">
                    <FaIcons.FaHandHoldingUsd className="svg-icons" size={28} />
                    <br />
                    <span>Make Money</span>
                  </div>
                  <div className="interactive-center-tags community-tag">
                    <BiIcons.BiHomeHeart className="svg-icons" size={28} />
                    <br />
                    <span>Community</span>
                  </div>
                  <div className="interactive-center-tags sale-tag">
                    <CgIcons.CgShoppingBag className="svg-icons" size={28} />
                    <br />
                    <span>$0.01 sale</span>
                  </div>
                </div>
              </Paper>
            </Grid>
            <div className="misc-links">
              <div className="link-1" style={{ marginRight: "1.5%" }}>
                <Link to="/account">
                  <img
                    src="https://imgaz1.chiccdn.com/os/201910/20191017050928_348.jpg.webp"
                    alt=""
                  />
                </Link>
              </div>
              <div style={{ marginRight: "1.5%" }}>
                <Link to="/account">
                  <img
                    src="https://imgaz1.chiccdn.com/os/201910/20191017050919_804.jpg.webp"
                    alt=""
                  />
                </Link>
              </div>
              <div style={{ marginRight: "1.5%" }}>
                <Link to="/account">
                  <img
                    src="https://imgaz1.chiccdn.com/os/201910/20191017050908_919.jpg.webp"
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <Link to="/account">
                  <img
                    src="https://imgaz1.chiccdn.com/os/201910/20191017050900_567.jpg.webp"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="you-may-like">
              <span className="divider3 divider6">You may also like</span>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Account;
