import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AccountPanel from "../../components/account-panel/panel";
// import PersonalInfoForm from "../../componenpts/personal-info-form/personal-info-form";
import Orders from "./orders";
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
function OrdersPage() {
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
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
