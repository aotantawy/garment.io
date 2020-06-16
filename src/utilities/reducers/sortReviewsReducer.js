import * as actionTypes from "../actionTypes";
import { dummyResults } from "./../dummyData";

function sortReviews(allBusinesses) {
  let allBusinessesCopy = allBusinesses;
  allBusinessesCopy.sort(
    (first, second) => second.numberOfReviews - first.numberOfReviews
  );
  return allBusinessesCopy;
}

/**
 * state prototype:
 * [
 *
 *      {
 *          numberOfReivews : int
 *      }
 *
 * ]
 */

export default function sortReviewsReducer(state = dummyResults, action) {
  switch (action.type) {
    case actionTypes.SORT_REVIEWS:
      return [...sortReviews(state)];
    default:
      return state;
  }
}
