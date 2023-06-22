import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/User";
import articleReducer from "./reducers/Article";
import courseReducer from "./reducers/Course";

export default configureStore({
  reducer: {
    userReducer,
    articleReducer,
    courseReducer,
  },
});
