import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: undefined,
  value1: undefined,
  value2: undefined,
}

export const lengthSlice = createSlice({
  name: 'length',
  initialState,
  reducers: {
    newLength: (state, action) => {
      state.value = action.payload
    },
    newLength1: (state, action) => {
        state.value1 = action.payload
    },
    newLength2: (state, action) => {
        state.value2 = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { newLength, newLength1, newLength2 } = lengthSlice.actions

export default lengthSlice.reducer