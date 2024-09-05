import { configureStore } from '@reduxjs/toolkit'
import exampleSlice from './reducers/exampleSlice'

export default configureStore({
  reducer: {
    example: exampleSlice,
  }
})