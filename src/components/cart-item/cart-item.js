import React from "react";
import "./cart-item.scss";
import * as HiIcons from "react-icons/hi";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import { useHistory } from "react-router-dom";

const CartItem = ({ item, clearItemFromCart }) => {
  const history = useHistory();
  console.log({ history });
  return (
    <div className="cart-item">
      <img src={item.image_url} alt="" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="item-cart-name"
          onClick={() => {
            // window.location.replace(`/product/${item.id}`);
            history.push(`/product/${item.id}`);
          }}
        >
          <span> {`${item.name.slice(0, 20)}...`}</span>
        </div>
        <div className="remove-icon">
          <HiIcons.HiOutlineTrash
            style={{ position: "absolute", right: "-120%" }}
            onClick={() => {
              clearItemFromCart(item);
            }}
            size={19}
          />
        </div>
        <div className="cart-item-details">
          <br />
          <p>Color / Size</p>
          <br />
          <div className="details-style">
            <h2 style={{ fontWeight: "700" }}>${item.current_price}</h2>
            <h4 style={{ right: "60%", position: "absolute" }}>
              X{item?.quantity}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
