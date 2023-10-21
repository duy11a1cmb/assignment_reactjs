import { createSlice } from "@reduxjs/toolkit";
import { FilterTable } from "../../models/userModel";

const initialState = {
  query: "",
  sort: "none",
  currentPage: 1,
  totalPages: 1,
  numberPerPage: 1,
};

const filterPages = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setQueryFilterPages: (state: FilterTable, action) => {
      state.query = action.payload;
    },
    setSortFilterPages: (state: FilterTable, action) => {
      state.sort = action.payload;
    },
    setCurrentFilterPages: (state: FilterTable, action) => {
      state.currentPage = action.payload;
    },
    setTotalFilterPages: (state: FilterTable, action) => {
      state.totalPages = action.payload;
    },
    setNumberPerPageslFilterPages: (state: FilterTable, action) => {
        state.numberPerPage = action.payload;
      },
  },
});

export const {
  setQueryFilterPages,
  setSortFilterPages,
  setTotalFilterPages,
  setCurrentFilterPages,
  setNumberPerPageslFilterPages
} = filterPages.actions;
export default filterPages.reducer;
