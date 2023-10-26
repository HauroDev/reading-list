import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PlusCircle from './icons/PlusCircle'
import XCircle from './icons/XCircle'

const BookCard = ({
  title,
  genre,
  cover,
  year,
  author,
  ISBN
}: BookCardProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isAdded, setIsAdded] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const toggleIsAdded = () => setIsAdded(!isAdded)

  return (
    <li
      data-testid='book-card'
      className={`${isAdded ? 'brightness-[.45]' : 'brightness-100'
        } relative flex flex-col items-center rounded-md dark:shadow-gray-800 shadow-gray-400 shadow-xl hover:shadow-none transition-all duration-200 w-[15rem]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      onClick={toggleIsAdded}>
      <NavLink
        className={`${isHovered ? 'opacity-100' : 'opacity-0'
          } absolute top-0 left-0 w-full text-center  bg-opacity-75 dark:bg-opacity-60 z-10 bg-white dark:bg-gray-600 transition-opacity duration-200 hover:underline`}
        to={`/books/${ISBN}`}>
        <h2 data-testid='book-card-title'>{title}</h2>
      </NavLink>
      <div
        className={`${isHovered ? 'opacity-100' : 'opacity-0'
          } absolute top-[40%] right-[50%] transform translate-x-[50%] translate-y-[50%] w-fit text-center bg-white dark:bg-gray-600 rounded-full bg-opacity-75 dark:bg-opacity-60 z-10 transition-opacity duration-200`}
        onClick={toggleIsAdded}>
        {!isAdded ? (
          <div data-testid='add'>
            <PlusCircle />
          </div>
        ) : (
          <span data-testid='remove'>
            <XCircle />
          </span>
        )}
      </div>
      <img
        data-testid='cover'
        className='w-full h-full rounded-md object-cover'
        src={cover}
        alt={title}
        title={title}
      />
      <div
        className={`${isHovered ? 'opacity-100' : 'opacity-0'
          } absolute bottom-0 left-0 w-full bg-white dark:bg-gray-600 bg-opacity-75 dark:bg-opacity-50 z-10 transition-opacity duration-200 p-2 text-sm`}>
        <p data-testid='genre'>Genero: {genre}</p>
        <p data-testid='year'>Año: {year}</p>
        <p data-testid='author'>Autor: {author.name}</p>
      </div>
    </li>
  )
}

export default BookCard
