import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: undefined,
  value1: undefined,
  value2: undefined,
}

export const radiusSlice = createSlice({
  name: 'radius',
  initialState,
  reducers: {
    newRadius: (state, action) => {
      state.value = action.payload
    },
    newRadius1: (state, action) => {
        state.value1 = action.payload
    },
    newRadius2: (state, action) => {
        state.value2 = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { newRadius, newRadius1, newRadius2 } = radiusSlice.actions

export default radiusSlice.reducer