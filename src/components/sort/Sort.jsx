import React, { useState } from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import styles from "./styles/sort.module.css";

function sortHandle(e, props, setShowIcon) {
  props.activateSort();
  setShowIcon(true);
}

const Sort = (props) => {
  const [showIcon, setShowIcon] = useState(false);
  return (
    <button
      className={`btn btn-outline-dark ${styles["sort-button"]}`}
      onClick={(e) => sortHandle(e, props, setShowIcon)}
    >
      {showIcon ? <ArrowDownwardIcon /> : "Sort"}
    </button>
  );
};

export default Sort;
