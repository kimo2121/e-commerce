import React from "react";
import { Card } from "@material-ui/core";
import MainButton from "../MainButton/MainButton";
import { Link } from "react-router-dom";

export default function DiscountCar({ product }) {
  let Img =
    "https://imgaz1.chiccdn.com/thumb/view/oaupload/newchic/images/AF/62/39b7b548-076b-4876-a23d-ddb49656c6a0.jpg";
  const discondCardStyles = {
    width: "auto",
    background: "red",
    margin: "0 1rem",
    top: "-1rem",
  };
  const { image_url, name, discount, id } = product;
  return (
    <Card style={{ display: "flex", margin: "1rem" }}>
      <Link to={`product/${id}`}>
        <img
          src={image_url ? image_url : Img}
          alt="discount"
          style={{ width: "75px", height: "75px" }}
        />
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "1rem",
          width: "100%",
        }}
      >
        <h2 style={{ color: "red", fontWeight: "bold" }}>{discount}% OFF </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link style={{ width: "60%", color: "black" }} to={`product/${id}`}>
            {discount}% off for
            <span>{`${name.slice(0, 10)}...`}</span>
          </Link>
          <MainButton title="Get it" style={discondCardStyles} />
        </div>
      </div>
    </Card>
  );
}
