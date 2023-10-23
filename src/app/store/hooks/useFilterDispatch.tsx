import { useDispatch } from 'react-redux'
import store from '../store'

export type FilterDispatch = typeof store.dispatch

export const useFilterDispatch: () => FilterDispatch = useDispatch
