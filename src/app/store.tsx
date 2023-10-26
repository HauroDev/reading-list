import { configureStore } from '@reduxjs/toolkit'
import libraryReducer from '../features/library/library'
import persistenceStorage from './middlewares/persistenceStorage'

const store = configureStore({
  reducer: {
    library: libraryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistenceStorage)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
