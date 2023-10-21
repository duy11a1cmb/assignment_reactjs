import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userSlices from "./slices/userSlices";
import filterPages from './slices/filterSlices'

const rootReducer = combineReducers({
    userSlices, filterPages
});

const store = configureStore({
    reducer: rootReducer || {},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export default store;