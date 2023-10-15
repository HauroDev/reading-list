import {
  AnyAction,
  Dispatch,
  Middleware,
  MiddlewareAPI
} from '@reduxjs/toolkit'
import { RootState } from '../store'

export const storeName = '__APP_STORAGE_LRM__'

const persistenceStorage: Middleware = (
  api: MiddlewareAPI<Dispatch<AnyAction>, RootState>
) => {
  const { getState } = api
  return (next) => (action) => {
    next(action)
    if (localStorage.getItem(storeName) === null) {
      localStorage.setItem(storeName, JSON.stringify(getState()))
    }
    next(action)
  }
}

export default persistenceStorage
