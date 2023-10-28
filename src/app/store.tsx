import {
  PreloadedState,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'
import libraryReducer from '../features/library/librarySlice'
import persistenceStorage from './middlewares/persistenceStorage'

const rootReducer = combineReducers({
  library: libraryReducer
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(persistenceStorage)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default setupStore()
