import { configureStore } from '@reduxjs/toolkit'
import librarySlice from './slices/library'
import persistenceStorage from './middlewares/persistenceStorage'

const store = configureStore({
  reducer: {
    library: librarySlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistenceStorage)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
