import { storeName } from '../../app/middlewares/persistenceStorage'
import store, { RootState } from '../../app/store'
import { createAsyncThunk } from '@reduxjs/toolkit'

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

      const currentState = store.getState()

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
