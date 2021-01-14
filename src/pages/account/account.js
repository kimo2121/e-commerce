import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import "./account.css";
import * as HiIcons from "react-icons/hi";
import IconicComponent from "../../components/iconic-component/iconic-component";
import {
  IconData,
  MyAssets,
  InteractiveData,
} from "../../components/iconic-component/iconic-data";
import MiscLinks from "../../components/misc-links/misc-links";
import YouMayAlsoLike from "../../components/you-may-also-like/you-may-also-like";
import AccountPanel from "../../components/account-panel/panel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    borderRadius: "0%",
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    minWidth: "100%",
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
        <div style={{ minWidth: "18%" }}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper
                style={{ minHeight: "160vh", padding: "0px" }}
                className={classes.paper}
              >
                <AccountPanel />
              </Paper>
            </Grid>
          </Grid>
        </div>
        <div style={{ width: "74%", marginLeft: "1.5%" }}>
          <Grid container spacing={2}>
            <Grid style={{ marginLeft: "0%" }} item xs={12}>
              <Paper
                className={classes.paper}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  padding: "0",
                  margin: "0",
                  height: "35vh",
                }}
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
              <Paper style={{ height: "42vh" }} className={classes.paper}>
                <span className="divider5">Interactive center</span>
                <div className="interactive-section">
                  {InteractiveData.map((item) => (
                    <IconicComponent
                      name={item.name}
                      icon={item.icon}
                      InteractiveCenter
                    />
                  ))}
                </div>
              </Paper>
            </Grid>
            <div className="misc-links">
              <MiscLinks />
            </div>
            <div className="you-may-like">
              <span className="divider3 divider6">You may also like</span>
              {/* <YouMayAlsoLike /> */}
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Account;
