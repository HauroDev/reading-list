import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { storeName } from '../../app/middlewares/persistenceStorage'
import { RootState } from '../../app/store'

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
  status: 'idle' | 'loading' | 'complete'
}

const initialState: LibraryState = localStorage.getItem(storeName)
  ? JSON.parse(localStorage.getItem(storeName) as string).library
  : {
      books: [],
      filterBooks: [],
      readingList: [],
      filters: {
        genres: [],
        maxNumberOfPages: 0
      },
      bookDetail: {} as Book,
      status: 'idle'
    }

export const fetchBooks = createAsyncThunk(
  'library/fetchBooks',
  async (_, thunkAPI) => {
    const storedData: RootState = JSON.parse(
      localStorage.getItem(storeName) as string
    )

    if (storedData?.library.books.length) {
      return thunkAPI.fulfillWithValue(storedData.library.books)
    }

    try {
      const response = await import('../../data/books.json')

      const currentState = thunkAPI.getState() as RootState

      localStorage.setItem(
        storeName,
        JSON.stringify({
          ...currentState,
          library: {
            ...currentState.library,
            books: response.library
          }
        })
      )
      return thunkAPI.fulfillWithValue(response.library)
    } catch (error) {
      console.error(error)
      return thunkAPI.rejectWithValue([])
    }
  }
)

export const fetchFilters = createAsyncThunk(
  'library/fetchFilters',
  async (_, thunkAPI) => {
    const storeCached = localStorage.getItem(storeName) as string

    const {
      filters: { genres, maxNumberOfPages }
    } = (JSON.parse(storeCached) as RootState).library

    if (genres.length && maxNumberOfPages) {
      return thunkAPI.fulfillWithValue({ genres, maxNumberOfPages })
    }

    try {
      const response = await import('../../data/books.json')

      const filters: Filters = {
        genres: Array.from(
          new Set(response.library.map((book) => book.book.genre))
        ),
        maxNumberOfPages: Math.max(
          ...response.library.map((book) => book.book.pages)
        )
      }

      return thunkAPI.fulfillWithValue(filters)
    } catch (error) {
      console.error(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

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
    addBookToReadingList: (state, action: PayloadAction<string>) => {
      state.readingList = [
        ...state.readingList,
        state.books.find((book) => book.book.ISBN === action.payload)!
      ]
    },
    removeBookFromReadingList: (state, action: PayloadAction<string>) => {
      state.readingList = state.readingList.filter(
        (book) => book.book.ISBN !== action.payload
      )
    },
    filterBooksByGenre: (state, action: PayloadAction<string>) => {
      if (state.filters.genres.includes(action.payload)) {
        state.filterBooks = state.books.filter(
          (book) => book.book.genre === action.payload
        )
      } else {
        state.filterBooks = state.books
      }
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
        state.status = 'complete'
        state.books = action.payload
        state.filterBooks = action.payload
      })
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = 'idle'
        state.books = []
        state.filterBooks = []
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.status = 'complete'
        state.filters = action.payload
      })
      .addCase(fetchFilters.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchFilters.rejected, (state) => {
        state.status = 'idle'
        state.filters = {
          genres: [],
          maxNumberOfPages: 0
        }
      })
  }
})

const { reducer, actions } = librarySlice

// actions
export const {
  setLibrary,
  setBookDetail,
  addBookToReadingList,
  removeBookFromReadingList,
  filterBooksByGenre,
  filterBooksByNumberOfPages
} = actions

// selectors
export const selectorLibrary = {
  selectBooks: (state: RootState) => state.library.books,
  selectFilterBooks: (state: RootState) => state.library.filterBooks,
  selectReadingList: (state: RootState) => state.library.readingList,
  selectFilters: (state: RootState) => state.library.filters,
  selectBookDetail: (state: RootState) => state.library.bookDetail,
  selectFetchStatus: (state: RootState) => state.library.status
}

// reducer
export default reducer
