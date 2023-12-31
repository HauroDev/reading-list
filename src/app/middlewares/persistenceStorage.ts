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
    localStorage.setItem(storeName, JSON.stringify(getState()))
  }
}

export default persistenceStorage
