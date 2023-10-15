import { storeName } from '../middlewares/persistenceStorage'
import { setLibrary } from '../slices/library'
import store, { AppDispatch } from '../store'

export const fetchBooks = () =>
  async function (dispatch: AppDispatch) {
    try {
      const storedData = JSON.parse(localStorage.getItem(storeName) as string)

      if (storedData?.library?.length) {
        return dispatch(setLibrary(storedData.library))
      }

      const response = await import('../../data/books.json')
      localStorage.setItem(
        storeName,
        JSON.stringify({ ...store.getState(), library: response.library })
      )
      dispatch(setLibrary(response.library))
    } catch (error) {
      console.error(error)
      dispatch(setLibrary([]))
    }
  }
