import { useState } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { removeBookFromReadingList } from '../librarySlice'

const ReadingCard = ({
  title,
  genre,
  cover,
  year,
  author,
  ISBN
}: BookCardProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const removeToList = () => {
    dispatch(removeBookFromReadingList(ISBN))
  }

  return (
    <li
      data-testid='book-card'
      className='relative flex flex-col items-center rounded-md dark:shadow-gray-800 shadow-gray-400 shadow-xl hover:shadow-none transition-all duration-200'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      onClick={removeToList}>
      <h2
        className={`${
          isHovered ? 'opacity-100' : 'opacity-0'
        } absolute top-0 left-0 w-full text-center  bg-opacity-75 dark:bg-opacity-60 z-10 bg-white dark:bg-gray-600 transition-opacity duration-200`}
        data-testid='title'>
        {title}
      </h2>
      <img
        data-testid='cover'
        className='w-full h-full rounded-md object-cover'
        src={cover}
        alt={title}
        title={title}
      />
      <div
        className={`${
          isHovered ? 'opacity-100' : 'opacity-0'
        } absolute bottom-0 left-0 w-full bg-white dark:bg-gray-600 bg-opacity-75 dark:bg-opacity-50 z-10 transition-opacity duration-200 p-2 text-sm`}>
        <p data-testid='genre'>Genero: {genre}</p>
        <p data-testid='year'>Año: {year}</p>
        <p data-testid='author'>Autor: {author.name}</p>
      </div>
    </li>
  )
}

export default ReadingCard
