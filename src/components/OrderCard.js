import React from "react";
import { Grid } from "@material-ui/core";
import { Segment } from "semantic-ui-react";
import CheckoutItem from "./checkout-item/checkout-item";
import dayjs from "dayjs";
const OrderCard = ({ order, user }) => {
  let createdAt = order?.createdAt;
  createdAt = dayjs(createdAt).format("ddd, MMM D, YYYY h:mm A	"); //Thu, Aug 16, 2018 8:02 PM
  return (
    <Segment raised style={{ margin: "0 0 2rem 0" }}>
      <div style={{ margin: "1rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <p> {`OrderId:  ${order?.id}`}</p>
            <p> {`Created at:  ${createdAt}`}</p>
            {/* <p>payment way</p> */}
          </Grid>
          <Grid item xs={6}>
            <p> {`Recipient:  ${user.username}`} </p>
            <p> {`Total:$  ${order?.total}`} </p>
          </Grid>
        </Grid>
      </div>

      <div className="titles-header">
        <span style={{ marginLeft: "5%" }}>item</span>
        <span>Unit Price</span>
        <span>Qty</span>
        <span>Subtotal</span>
      </div>
      <div>
        {order.items.map((cartItem) => (
          <CheckoutItem
            key={cartItem.id}
            item={cartItem}
            isOrdersPage="shoppingbag"
          />
        ))}
      </div>
    </Segment>
  );
};

export default OrderCard;
