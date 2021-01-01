import React from "react";
import "./cart-dropdown";
import { Header, Button, Popup, Grid } from "semantic-ui-react";
import * as AiIcons from "react-icons/ai";
import CartItem from "../cart-item/cart-item";

const CartDropdown = () => {
  return (
    <Popup
      //   position="bottom center"
    //   style={{ padding:'0%'}}
      trigger={
        <AiIcons.AiOutlineShopping
          style={{ position: "absolute", marginLeft: "82%", marginTop: "2%" }}
          color={"black"}
          size={28}
        />
      }
      flowing
      hoverable
    >
      <Grid centered divided columns={3}>
        <Grid.Column textAlign="center" style={{ width: "30vw" }}>
          <CartItem />
          {/* <Button>Choose</Button> */}
        </Grid.Column>
      </Grid>
    </Popup>
  );
};

export default CartDropdown;
