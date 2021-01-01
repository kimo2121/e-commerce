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
                  padding: "0",
                  margin: "0",
                  height: "120vh",
                }}
              >
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
