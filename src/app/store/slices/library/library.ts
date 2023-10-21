import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { storeName } from '../../middlewares/persistenceStorage'

type LibraryState = {
  books: Book[]
  bookDetail: Book
}

const initialState: LibraryState = {
  books: localStorage.getItem(storeName)
    ? JSON.parse(localStorage.getItem(storeName) as string).library.books
    : [],
  bookDetail: {} as Book
}

export const librarySlice = createSlice({
  name: 'Library',
  initialState,
  reducers: {
    setLibrary: (state, action: PayloadAction<Book[]>) => {
      return {
        ...state,
        books: action.payload
      }
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload)
    },
    removeBook: (state, action: PayloadAction<Book>) => {
      state.books = state.books.filter(
        (obj) => obj.book.ISBN !== action.payload.book.ISBN
      )
    },
    setBookDetail: (state, action: PayloadAction<string>) => {
      const book = state.books.find((obj) => obj.book.ISBN === action.payload)
        ?.book

      return {
        ...state,
        bookDetail: {
          book: book!
        }
      }
    }
  }
})

export const { setLibrary, addBook, removeBook, setBookDetail } =
  librarySlice.actions

export default librarySlice.reducer
