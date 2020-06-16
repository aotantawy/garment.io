import { combineReducers } from "redux";
import statusReducer from "./statusReducer";
import sortReviewsReducer from "./sortReviewsReducer";

export default combineReducers({ statusReducer, sortReviewsReducer });
