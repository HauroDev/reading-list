import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { storeName } from '../middlewares/persistenceStorage'

const initialState: Book[] = localStorage.getItem(storeName)
  ? JSON.parse(localStorage.getItem(storeName) as string).library
  : []

export const librarySlice = createSlice({
  name: 'Library',
  initialState,
  reducers: {
    setLibrary: (_, action: PayloadAction<Book[]>) => {
      return action.payload
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.push(action.payload)
    },
    removeBook: (state, action: PayloadAction<Book>) => {
      state = state.filter((obj) => obj.book.ISBN !== action.payload.book.ISBN)
    }
  }
})

export const { setLibrary, addBook, removeBook } = librarySlice.actions

export default librarySlice.reducer
