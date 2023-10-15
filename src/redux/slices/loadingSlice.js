import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loading = createSlice({
  name: "loading",
  initialState,
  reducers: {
    onLoading: (state) => {
      state.loading = true;
    },
    offLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { onLoading, offLoading } = loading.actions;
export default loading.reducer;
