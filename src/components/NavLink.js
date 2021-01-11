import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const NavLink = ({ subcategories, category }) => {
  return (
    <Grid container style={{ padding: "2rem " }}>
      {subcategories.map((item) => (
        <Grid item xs={12} sm={4}>
          <Link key={item} className="junior" to={`/${category}/${item}`}>
            {item}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default NavLink;
