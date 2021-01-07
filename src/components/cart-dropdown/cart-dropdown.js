import React from "react";
import "./cart-dropdown";
<<<<<<< HEAD
import { Popup, Grid } from "semantic-ui-react";
=======
import { Header, Button, Popup, Grid } from "semantic-ui-react";
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
import * as AiIcons from "react-icons/ai";
import CartItem from "../cart-item/cart-item";

const CartDropdown = () => {
  return (
    <Popup
<<<<<<< HEAD
=======
      //   position="bottom center"
    //   style={{ padding:'0%'}}
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
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
<<<<<<< HEAD
=======
          {/* <Button>Choose</Button> */}
>>>>>>> dbe0e6370e2b29a7e59daff34f20bfc2ca584fb2
        </Grid.Column>
      </Grid>
    </Popup>
  );
};

export default CartDropdown;
