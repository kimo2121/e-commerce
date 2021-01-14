export const getSubcategories = (products, category) => {
  const filteredData = products.filter((item) =>
    item.category.toUpperCase().includes(category.toUpperCase())
  );

  let subcategoryList = [];
  filteredData.sort((a, b) => {
    if (a.subcategory !== b.subcategory) {
      //   console.log(a.subcategory);
      subcategoryList.push(a.subcategory);
    }
  });
  return subcategoryList;
};

export const sortList = (filterTerm, array) => {
  console.log({ array });
  console.log({ filterTerm });
  let sortedList = array.sort((a, b) => {
    // console.log(sort);

    if (filterTerm === "Price High to Low") {
      let nameA = a.current_price; // ignore upper and lowercase
      let nameB = b.current_price; // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    } else if (filterTerm === "Price Low to High") {
      let nameA = a.current_price; // ignore upper and lowercase
      let nameB = b.current_price; // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    } else if (filterTerm === "Most Popular") {
      let nameA = a.likes_count; // ignore upper and lowercase
      let nameB = b.likes_count; // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    }
  });
  console.log("sortedList from util func", sortedList);
  return sortedList;
};
