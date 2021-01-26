import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { useSelector } from "react-redux";
import OrderCard from "../../components/OrderCard";
import { GET_ORDERS_QUERY } from "../../util/graphql";

const Orders = () => {
  const orderdItems = useSelector((state) => state.cart.orderdItems);
  console.log({ orderdItems });
  const user = useSelector((state) => state.user.user);

  const { data } = useQuery(GET_ORDERS_QUERY, {
    variables: { userId: user?.id },
  });
  console.log({ data });

  return (
    <div style={{ position: "inherit" }}>
      {data?.getOrders.map((order) => (
        <OrderCard user={user} order={order} key={order.id} />
      ))}
    </div>
  );
};

export default Orders;
