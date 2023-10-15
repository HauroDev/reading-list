import { useDispatch } from 'react-redux'
import store from '../store'

export type LibraryDispatch = typeof store.dispatch

export const useLibraryDispatch: () => LibraryDispatch = useDispatch
