import * as actionTypes from "./../actionTypes";

export function fetchData() {
  return {
    type: actionTypes.FETCH_DATA,
  };
}

export function fetchDataFailure() {
  return {
    type: actionTypes.FETCH_DATA_FAILURE,
  };
}

export function fetchDataSuccess(data) {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: {
      data,
    },
  };
}

export function sortByReviews(data) {
  return {
    type: actionTypes.SORT_REVIEWS,
    payload: {
      data,
    },
  };
}
