import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { useAppDispatch } from '../app/hooks'
import { fetchFilters } from '../features/library/fetchFilters'
import {
  filterBooksByGenre,
  filterBooksByNumberOfPages
} from '../features/library/library'

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
      className='flex flex-row justify-around items-center gap-5'
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
      <div>
        <select
          data-testid='select-genre'
          className='bg-gray-950'
          onChange={(e) => setGenreFilter(e.target.value)}>
          <option value=''>All genres</option>
          {genres.map((genre) => (
            <option
              key={genre}
              value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filters
