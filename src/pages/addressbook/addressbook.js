import React from "react";
import "./addressbook.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AccountPanel from "../../components/account-panel/panel";
import AddressForm from "../../components/address-form/address-form";
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
function Addressbook() {
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
                <AddressForm />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Addressbook;
