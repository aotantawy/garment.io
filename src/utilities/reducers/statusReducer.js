import * as actionTypes from "../actionTypes";

function resetStatus(status) {
  const newStatus = {
    loading: false,
    loaded: false,
    failed: false,
  };
  switch (status) {
    case "loading":
      newStatus.loading = true;
      break;
    case "loaded":
      newStatus.loaded = true;
      break;
    case "failed":
      newStatus.failed = true;
      break;
    default:
      return {};
  }
  return newStatus;
}

/**
 * state prototype:
 * [
 *  {
 *      loading: default false
 *      loaded:  default false
 *      failed   default false
 *  },
 *  [
 *      {
 *
 *      }
 *  ]
 * ]
 */

export default function statusReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return [(state[0] = resetStatus("loading"))];
    case actionTypes.FETCH_DATA_SUCCESS:
      return [
        ...state,
        (state[0] = resetStatus("loaded")),
        (state[1] = action.payload.data),
      ];
    case actionTypes.FETCH_DATA_FAILURE:
      return [(state[0] = resetStatus("failed"))];
    default:
      return state;
  }
}
