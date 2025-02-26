import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequest: (state, actions) => {
      return actions.payload;
    },
    removeRequest: () => null
  }
});

export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;