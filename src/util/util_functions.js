import { Icon } from "semantic-ui-react";

export const getSubcategories = (products, category) => {
  const filteredData = products.filter((item) =>
    item.category.toUpperCase().includes(category.toUpperCase())
  );

  let subcategoryList = [];
  filteredData.sort((a, b) => {
    if (a.subcategory !== b.subcategory) {
      subcategoryList.push(a.subcategory);
    }
    return a;
  });
  return subcategoryList;
};
export const getColorsFilter = (products) => {
  let colorsList = [];
  let newColorsList = [];

  products.sort((a, b) => {
    if (
      a.variation_0_color !== "" ||
      b.variation_0_color !== "" ||
      a.variation_1_color !== "" ||
      b.variation_1_color !== ""
    ) {
      if (a.variation_0_color !== b.variation_0_color) {
        colorsList.push(a.variation_0_color);
      }
      if (a.variation_1_color !== b.variation_1_color) {
        colorsList.push(a.variation_1_color);
      }
    }
    return a;
  });

  colorsList = colorsList.filter((i) => i !== "");
  colorsList = colorsList.sort(function (a, b) {
    var nameA = a.toUpperCase(); // ignore upper and lowercase
    var nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  colorsList = colorsList.sort((a, b) => {
    if (a !== b) {
      newColorsList.push(a);
    }
    return a;
  });
  console.log({ newColorsList });
  return newColorsList;
};

export const sortList = (filterTerm, array) => {
  console.log({ array });
  console.log({ filterTerm });
  let sortedList = array.sort((a, b) => {
    if (filterTerm === "Price Low to High") {
      return parseInt(a.current_price) - parseInt(b.current_price);
    } else if (filterTerm === "Price High to Low") {
      return parseInt(b.current_price) - parseInt(a.current_price);
    } else if (filterTerm === "Most Popular") {
      return parseInt(b.likes_count) - parseInt(a.likes_count);
    }
    return a;
  });
  console.log("sortedList from util func", sortedList);
  return sortedList;
};

export const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <Icon className="right-direction" name="angle right" size="big" />
    </div>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <Icon className="left-direction" name="angle left" size="big" />
    </div>
  );
};
