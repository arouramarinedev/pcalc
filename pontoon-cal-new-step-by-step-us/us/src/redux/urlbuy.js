import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'https://auroramarine.ca/pontoon-1-package-200-sqft.html',
}

export const urlbuySlice = createSlice({
  name: 'urlbuy',
  initialState,
  reducers: {
    newUrlbuy: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { newUrlbuy} = urlbuySlice.actions

export default urlbuySlice.reducer