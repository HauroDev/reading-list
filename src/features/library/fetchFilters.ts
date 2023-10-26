import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { storeName } from '../../app/middlewares/persistenceStorage'
import { Filters } from './library'

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
