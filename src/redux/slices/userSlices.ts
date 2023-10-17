import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setDetailUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const { setDetailUser } = userSlice.actions;
export default userSlice.reducer;
