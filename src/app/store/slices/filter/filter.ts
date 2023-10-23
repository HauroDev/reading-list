import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  maxPages: 0,
  genres: [],
  search: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.maxPages = action.payload.maxPages
      state.genres = action.payload.genres
      state.search = action.payload.search
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setMaxPages: (state, action) => {
      state.maxPages = action.payload
    },
    setGenres: (state, action) => {
      state.genres = action.payload
    }
  }
})

export const { setFilters, setGenres, setMaxPages, setSearch } =
  filterSlice.actions

export default filterSlice.reducer
