import React from "react";
import ReviewsHeader from "./ReviewsHeader";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <div style={{ margin: "2rem 0" }}>
      <ReviewsHeader />
      {Array(5)
        .fill()
        .map((i, index) => (
          <ReviewCard key={index} />
        ))}
    </div>
  );
}
