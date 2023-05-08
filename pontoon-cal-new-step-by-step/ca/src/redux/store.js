import { configureStore } from '@reduxjs/toolkit'
import lengthReducer from './dimensions'
import radiusReducer from './radius'
import squareftReducer from './squareft'
import locationReducer from "./location"
import conditionReducer from './condition'
import urlbuyReducer from './urlbuy'

export const store = configureStore({
  reducer: {
    length: lengthReducer,
    radius: radiusReducer,
    squareft: squareftReducer,
    locationer: locationReducer,
    conditioner: conditionReducer,
    urlbuy: urlbuyReducer,
  },
})