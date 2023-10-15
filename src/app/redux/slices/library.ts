import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import libraryJSON from '../../data/books.json'

const initialState: Library = {
  library: localStorage.library || libraryJSON.library || []
}

export const librarySlice = createSlice({
  name: 'Library',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.library.push(action.payload)
    },
    removeBook: (state, action: PayloadAction<Book>) => {
      state.library = state.library.filter(
        (obj) => obj.book.ISBN !== action.payload.book.ISBN
      )
    }
  }
})

export const { addBook, removeBook } = librarySlice.actions

export default librarySlice.reducer
