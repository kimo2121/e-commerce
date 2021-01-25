import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import "./account.scss";
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
      <div className={`${classes.root}` && "account-inner-container"}>
        <div className="left-pane-account">
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper className={`${classes.paper}` && "account-paper"}>
                <AccountPanel />
              </Paper>
            </Grid>
          </Grid>
        </div>
        <div className="right-side-account">
          <Grid container spacing={2}>
            <Grid style={{ marginLeft: "0%" }} item xs={12}>
              <Paper className={`${classes.paper}` && `profile-paper`}>
                <div className="divider2">My Assets</div>
                <div className="profile-picture">
                  <div className="edit-container">
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
                </div>
                <div className="header-assets">
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
            <Grid item xs={12}>
              <Paper
                style={{
                  padding: "0",
                  minHeight: "65vh",
                }}
                className={classes.paper}
              >
                <div className="divider3">My Orders</div>
                <div className="header-orders">
                  {IconData.map((item) => (
                    <IconicComponent name={item.name} icon={item.icon} />
                  ))}
                </div>
                <div className="my-orders-details">
                  <div className="divider4">
                    <span>Products</span>
                    <span>Order status</span>
                    <span>Operate</span>
                  </div>
                </div>
              </Paper>
            </Grid>
            {/* <Grid item xs={4}>
              <Paper style={{ height: "65vh" }} className={classes.paper}>
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
            </Grid> */}
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
