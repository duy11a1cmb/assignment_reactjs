import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userSlices from "./slices/userSlices";

const rootReducer = combineReducers({
    userSlices
});

const store = configureStore({
  reducer: rootReducer || {},
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export default store;