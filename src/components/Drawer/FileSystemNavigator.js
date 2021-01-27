import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { useSelector } from "react-redux";
import { getSubcategories } from "../../util/util_functions";
import MainLink from "../MainLink/MainLink";

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const data = [
  "Women",
  "Men",
  "Kids",
  "Bags",
  "Shoes",
  "jewelry",
  "house",
  "accessories",
  "beauty",
];
export default function FileSystemNavigator({ onClose }) {
  const all_products = useSelector((state) => state.products.all_products);

  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {data.map((category, indx) => (
        <TreeItem nodeId={indx} label={category}>
          {getSubcategories(all_products, category).map((sub, idx) => (
            <MainLink pathname={`/${category}/${sub}`} onClick={onClose()}>
              <TreeItem nodeId={idx} label={sub} />
            </MainLink>
          ))}
        </TreeItem>
      ))}

      {/* <TreeItem nodeId="5" label="Documents">
        {Array()
          .fill()
          .map((i) => (
            <TreeItem nodeId="10" label="OSS" />
          ))}
      </TreeItem> */}
    </TreeView>
  );
}
