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
          <Grid item xs={6} xs={12}>
            <h5> {`OrderId:  ${order?.id}`}</h5>
            <h5> {`Created at:  ${createdAt}`}</h5>
            {/* <p>payment way</p> */}
          </Grid>
          <Grid item xs={6} xs={12}>
            <h5> {`Recipient:  ${user.username}`} </h5>
            <h5> {`Total:$  ${order?.total}`} </h5>
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
