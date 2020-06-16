import axios from "axios";
import API_KEY from "./apiKeys";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

async function getAllBusinesses(businessName, location) {
  try {
    const url = `https://api.yelp.com/v3/businesses/search?term=${businessName}&location=${location}`;
    return await axios.get(
      "https://cors-anywhere.herokuapp.com/" + url,
      config
    );
  } catch (err) {
    console.log(err);
    return [];
  }
}

export { getAllBusinesses };
