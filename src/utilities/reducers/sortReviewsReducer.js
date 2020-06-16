import * as actionTypes from "../actionTypes";

function sortReviews(allBusinesses) {
  let allBusinessesCopy = allBusinesses;
  allBusinessesCopy.sort(
    (first, second) =>
      parseInt(second.review_count) - parseInt(first.review_count)
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

export default function sortReviewsReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.SORT_REVIEWS:
      return [...sortReviews(action.payload.data)];
    default:
      return state;
  }
}
