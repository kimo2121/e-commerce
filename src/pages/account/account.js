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
import { useSelector } from "react-redux";

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
  const user = useSelector((state) => state.user.user);

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
                  <div
                    className="edit-container"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: "2rem",
                    }}
                  >
                    {/* <div className="edit-prof-pic">
                      NC
                      <button className="edit">
                        <HiIcons.HiPencil size={23} />
                      </button>
                    </div> */}
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC"
                      alt="profile"
                      style={{
                        width: "52px",
                        hight: "52px",
                        borderRadius: "50%",
                      }}
                    />
                    <span> {user.username} </span>
                    <br />
                    <Link to="/account">Email: {user.email}</Link>
                    <br />
                    {/* <span className="exp-amount">NC EXP 0</span> */}
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
