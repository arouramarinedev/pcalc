import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Canada"
};

export const locationSlice = createSlice({
  name: "locationer",
  initialState,
  
  reducers: {
    newLocation: (state, action) => {
      state.location = action.payload;
    }
  }
});

export const { newLocation } = locationSlice.actions;
export default locationSlice.reducer;
