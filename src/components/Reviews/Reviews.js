import React, { useEffect, useState } from "react";
import ReviewsHeader from "./ReviewsHeader";
import ReviewCard from "./ReviewCard";
import { reviews } from "./data";
import { getSubcategories } from "../../util/util_functions";

export default function Reviews() {
  const [start, setstart] = useState(0);
  const [end, setend] = useState("");
  let intialArr = reviews.slice(0, 2);
  const [arr, setarr] = useState(intialArr);
  console.log({ intialArr });

  const getMore = (start, end) => {
    return reviews.slice(start, end);
  };
  let newStart = start + 2;
  let newEnd = end + 2;
  useEffect(() => {
    getMore();
    setarr(reviews.slice(start, end));
    setstart(start + 2);
    setend(end + 2);
  }, []);
  console.log({ arr });
  console.log({ start });
  console.log({ end });
  console.log(getMore(newStart, newEnd));

  return (
    <div style={{ margin: "2rem 0" }}>
      <ReviewsHeader />
      {reviews.map((i, index) => (
        <ReviewCard key={index} review={i} />
      ))}
      <button onClick={() => getMore()}>getMore</button>
    </div>
  );
}
