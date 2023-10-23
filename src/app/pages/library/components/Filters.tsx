import { useState } from 'react'
import { useFilterSelector } from '../../../store/hooks/useFilterSelector'

const Filters = () => {
  const { genres, maxPages } = useFilterSelector()
  const [pages, setPages] = useState<number>(0)

  return (
    <div
      className='flex flex-row justify-around items-center gap-5'
      data-testid='filters'>
      <div className='flex flex-col items-center'>
        <input
          type='range'
          min='0'
          max={maxPages}
          value={pages}
          onChange={(e) => setPages(parseInt(e.target.value))}
        />
        <span>{pages}</span>
      </div>
      <div>
        <select
          data-testid='select-genre'
          className='bg-gray-950'>
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
