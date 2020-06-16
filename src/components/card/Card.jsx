import React from "react";
import styles from "./styles/card.module.css";

const Card = (props) => {
  return (
    <div className={`card ${styles["data-card"]}`}>
      <img src={props.src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.businessName}</h5>
        <p className="card-subtitle mb-2 text-muted">
          Number of Reviews: {props.numberOfReviews}
        </p>
        <p className="card-text">{props.priceRange}</p>
        <p className="card-text">{props.fullAddress}</p>
      </div>
    </div>
  );
};

export default Card;
