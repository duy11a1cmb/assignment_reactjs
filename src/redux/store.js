import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import loading from "./slices/loadingSlice";

const rootReducer = combineReducers({
  loading,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export default store;
