import { configureStore } from '@reduxjs/toolkit'
import librarySlice from '../slices/library'

const store = configureStore({
  reducer: {
    library: librarySlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
