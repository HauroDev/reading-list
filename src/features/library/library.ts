import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { storeName } from '../../app/middlewares/persistenceStorage'
import { fetchBooks } from './fetchBooks'
import { fetchFilters } from './fetchFilters'

export interface Filters {
  genres: string[]
  maxNumberOfPages: number
}

export interface LibraryState {
  books: Book[]
  filterBooks: Book[]
  readingList: Book[]
  filters: Filters
  bookDetail: Book
  loading: boolean
}

const initialState: LibraryState = {
  books: localStorage.getItem(storeName)
    ? JSON.parse(localStorage.getItem(storeName) as string).library.books
    : [],
  filterBooks: [],
  readingList: [],
  filters: {
    genres: [],
    maxNumberOfPages: 0
  },
  bookDetail: {} as Book,
  loading: false
}

export const librarySlice = createSlice({
  name: 'Library',
  initialState,
  reducers: {
    setLibrary: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload
      state.filterBooks = action.payload
    },
    setBookDetail: (state, action: PayloadAction<string>) => {
      const book = state.books.find((obj) => obj.book.ISBN === action.payload)
      state.bookDetail = book!
    },
    filterBooksByGenre: (state, action: PayloadAction<string>) => {
      state.filterBooks = state.books.filter(
        (book) => book.book.genre === action.payload
      )
    },
    filterBooksByNumberOfPages: (state, action: PayloadAction<number>) => {
      state.filterBooks = state.books.filter(
        (book) => book.book.pages >= action.payload
      )
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.loading = false
        state.books = action.payload
        state.filterBooks = action.payload
      })
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false
        state.books = []
        state.filterBooks = []
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filters = action.payload
      })
  }
})

// actions
export const {
  setLibrary,
  setBookDetail,
  filterBooksByGenre,
  filterBooksByNumberOfPages
} = librarySlice.actions

// reducer
export default librarySlice.reducer
