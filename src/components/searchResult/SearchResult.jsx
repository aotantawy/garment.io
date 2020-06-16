import React, { useEffect, useState } from "react";
import store from "./../../utilities/store";
import { sortByReviews } from "./../../utilities/actionCreators";
import Card from "./../card/Card";
import Sort from "./../sort/Sort";
import styles from "./styles/search-result.module.css";

function activateSort(setShowResults) {
  store.dispatch(sortByReviews());
  setShowResults(store.getState().sortReviewsReducer);
}

const SearchResult = () => {
  const initResult = [
    {
      src:
        "https://www.agl-serveis.com/wp-content/uploads/2019/03/20150805204041-google-company-building-corporate.jpeg",
      businessName: "Business #1",
      numberOfReviews: 5,
      priceRange: "20-30",
      fullAddress: "building 22",
    },
  ];
  const [showResults, setShowResults] = useState(initResult);

  useEffect(() => {
    setShowResults(store.getState().statusReducer[1]);
  }, []);
  return (
    <div>
      <Sort activateSort={() => activateSort(setShowResults)} />
      <div className={styles["result-container"]}>
        {showResults.map((result) => (
          <Card
            key={result.fullAddress}
            src={result.src}
            businessName={result.businessName}
            numberOfReviews={result.numberOfReviews}
            priceRange={result.priceRange}
            fullAddress={result.fullAddress}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
