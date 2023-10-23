import { storeName } from '../middlewares/persistenceStorage'
import { setFilters } from '../slices/filter/filter'
import store, { AppDispatch, RootState } from '../store'

export const loadDataFilters = () =>
  async function (dispatch: AppDispatch) {
    const filter = (
      JSON.parse(localStorage.getItem(storeName) as string) as RootState
    ).filter

    const currentState = store.getState()

    if (filter) {
      try {
        const response = await import('../../data/books.json')
        const maxPages = response.library
          .map((obj) => obj.book.pages)
          .sort((a, b) => b - a)[0]
        const genres = Array.from(
          new Set(response.library.map((obj) => obj.book.genre).sort())
        )

        localStorage.setItem(
          storeName,
          JSON.stringify({
            ...currentState,
            filter: {
              ...currentState.filter,
              maxPages,
              genres,
              search: ''
            }
          })
        )
        dispatch(
          setFilters({
            ...currentState.filter,
            maxPages,
            genres,
            search: ''
          })
        )
      } catch (error) {
        console.error(error)
        dispatch(
          setFilters({
            ...currentState.filter,
            maxPages: 0,
            genres: [],
            search: ''
          })
        )
      }
    }
  }
