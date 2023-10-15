import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const useLibrarySelector = () =>
  useSelector((state: RootState) => state.library)
