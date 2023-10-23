import { configureStore } from '@reduxjs/toolkit'
import librarySlice from './slices/library/library'
import persistenceStorage from './middlewares/persistenceStorage'
import filterSlice from './slices/filter/filter'

const store = configureStore({
  reducer: {
    library: librarySlice,
    filter: filterSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistenceStorage)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
