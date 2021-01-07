import React from "react";
import { Link } from "react-router-dom";
import "./cart-item.css";
import * as HiIcons from "react-icons/hi";

const CartItem = () => {
  return (
    <div className="cart-item">
      <img
        src="https://www.vermontcountrystore.com/ccstore/v1/images/?source=/file/v6276597326414967799/products/80756.main.png&height=500&width=500&quality=0.88"
        alt=""
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/cartitem">Name</Link>
        <HiIcons.HiOutlineTrash className="remove-icon" size={19} />
        <p>Color / Size</p>
        <br/>
        <h2>Price</h2>
      </div>
    </div>
  );
};

export default CartItem;
