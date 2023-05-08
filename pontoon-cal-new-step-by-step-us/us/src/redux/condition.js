import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ""
};

export const conditionSlice = createSlice({
  name: "conditioner",
  initialState,
  
  reducers: {
    newCondition: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { newCondition } = conditionSlice.actions;
export default conditionSlice.reducer;
