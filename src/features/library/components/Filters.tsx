import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'
import { useAppDispatch } from '../../../app/hooks'

import {
  filterBooksByGenre,
  filterBooksByNumberOfPages,
  fetchFilters
} from '../librarySlice'

const Filters = () => {
  const { genres, maxNumberOfPages } = useSelector(
    (state: RootState) => state.library.filters
  )
  const [pageFilter, setPageFilter] = useState<number>(0)
  const [genreFilter, setGenreFilter] = useState<string>('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFilters())
  }, [])

  useEffect(() => {
    dispatch(filterBooksByNumberOfPages(pageFilter))
  }, [pageFilter])

  useEffect(() => {
    dispatch(filterBooksByGenre(genreFilter))
  }, [genreFilter])

  return (
    <div
      className='flex flex-col mb-5 sm:flex-row justify-around items-center gap-5'
      data-testid='filters'>
      <div className='flex flex-col items-center'>
        <input
          type='range'
          min='0'
          max={maxNumberOfPages}
          value={pageFilter}
          onChange={(e) => setPageFilter(parseInt(e.target.value))}
        />
        <span>{pageFilter}</span>
      </div>

      <select
        data-testid='select-genre'
        className='dark:bg-gray-950 dark:border-gray-300 border-gray-800'
        onChange={(e) => setGenreFilter(e.target.value)}>
        <option value=''>Todos los géneros</option>
        {genres.map((genre) => (
          <option
            key={genre}
            value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filters
