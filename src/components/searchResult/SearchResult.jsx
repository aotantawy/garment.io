import React from "react";
import Card from "./../card/Card";
import styles from "./styles/search-result.module.css";

const dummyResults = [
  {
    src:
      "https://www.agl-serveis.com/wp-content/uploads/2019/03/20150805204041-google-company-building-corporate.jpeg",
    businessName: "Business #1",
    NumberOfReviews: "50",
    priceRange: "20-30",
    fullAddress: "building no 16 nasr city",
  },
  {
    src:
      "https://www.agl-serveis.com/wp-content/uploads/2019/03/20150805204041-google-company-building-corporate.jpeg",
    businessName: "Business #1",
    NumberOfReviews: "50",
    priceRange: "20-30",
    fullAddress: "building no 16 nasr city",
  },
  {
    src:
      "https://www.agl-serveis.com/wp-content/uploads/2019/03/20150805204041-google-company-building-corporate.jpeg",
    businessName: "Business #1",
    NumberOfReviews: "50",
    priceRange: "20-30",
    fullAddress: "building no 16 nasr city",
  },
  {
    src:
      "https://www.agl-serveis.com/wp-content/uploads/2019/03/20150805204041-google-company-building-corporate.jpeg",
    businessName: "Business #1",
    NumberOfReviews: "50",
    priceRange: "20-30",
    fullAddress: "building no 16 nasr city",
  },
  {
    src:
      "https://www.agl-serveis.com/wp-content/uploads/2019/03/20150805204041-google-company-building-corporate.jpeg",
    businessName: "Business #1",
    NumberOfReviews: "50",
    priceRange: "20-30",
    fullAddress: "building no 16 nasr city",
  },
  {
    src:
      "https://www.agl-serveis.com/wp-content/uploads/2019/03/20150805204041-google-company-building-corporate.jpeg",
    businessName: "Business #1",
    NumberOfReviews: "50",
    priceRange: "20-30",
    fullAddress: "building no 16 nasr city",
  },    
];

const SearchResult = () => {
  return (
    <div className={styles["result-container"]}>
      {dummyResults.map((result) => (
        <Card
          key={result.businessName}
          src={result.src}
          businessName={result.businessName}
          priceRange={result.priceRange}
          fullAddress={result.fullAddress}
        />
      ))}
    </div>
  );
};

export default SearchResult;
