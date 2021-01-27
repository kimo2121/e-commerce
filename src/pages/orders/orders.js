import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { useSelector } from "react-redux";
import OrderCard from "../../components/OrderCard";
import { GET_ORDERS_QUERY } from "../../util/graphql";

const Orders = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const orderdItems = useSelector((state) => state.cart.orderdItems);
  console.log({ orderdItems });
  const user = useSelector((state) => state.user.user);

  const { loading, data } = useQuery(GET_ORDERS_QUERY, {
    variables: { userId: user?.id },
  });
  console.log({ data });

  return (
    <div style={{ position: "inherit" }}>
      {data?.getOrders.map((order) => (
        <OrderCard user={user} order={order} />
      ))}
    </div>
  );
};

export default Orders;
