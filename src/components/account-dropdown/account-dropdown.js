import React from "react";
import "./account-dropdown";
import { Header, Button, Popup, Grid } from "semantic-ui-react";
import * as HiIcons from "react-icons/hi";

const AccountDropdown = () => {
  return (
    <Popup
      position="bottom center"
      trigger={
        <HiIcons.HiOutlineUser
          style={{ position: "absolute", marginLeft: "72%", marginTop: "2%" }}
          color={"black"}
          size={28}
        />
      }
      flowing
      hoverable
    >
      <Grid centered divided columns={3}>
        <Grid.Column textAlign="center">
          <Header as="h4">Basic Plan</Header>
          <p>
            <b>2</b> projects, $10 a month
          </p>
          <Button>Choose</Button>
        </Grid.Column>
      </Grid>
    </Popup>
  );
};

export default AccountDropdown;
