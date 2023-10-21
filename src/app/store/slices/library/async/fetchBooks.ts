import { storeName } from '../../../middlewares/persistenceStorage'
import { setLibrary } from '../library'
import store, { AppDispatch, RootState } from '../../../store'

export const fetchBooks = () =>
  async function (dispatch: AppDispatch) {
    const storedData: RootState = JSON.parse(
      localStorage.getItem(storeName) as string
    )

    if (storedData?.library.books.length) {
      return dispatch(setLibrary(storedData.library.books))
    }

    try {
      const response = await import('../../../../data/books.json')

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
      dispatch(setLibrary(response.library))
    } catch (error) {
      console.error(error)
      dispatch(setLibrary([]))
    }
  }
