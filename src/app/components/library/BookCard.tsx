import { useState } from 'react'

const BookCard = ({
  title,
  genre,
  cover,
  year,
  author
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
      className={`${
        isAdded ? 'brightness-50' : 'brightness-100'
      } relative flex flex-col items-center rounded-md dark:shadow-gray-800 shadow-gray-400 shadow-xl hover:shadow-none transition-all duration-200 h-[20rem] w-[15rem]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <h2
        className={`${
          isHovered ? 'opacity-100' : 'opacity-0'
        } absolute top-0 left-0 w-full text-center bg-white dark:bg-gray-600 bg-opacity-75 dark:bg-opacity-60 z-10 transition-opacity duration-200`}
        data-testid='title'>
        {title}
      </h2>
      {/* Agregar svg's para agregar y quitar el libro de la lista y sus respectivos colore (fill-[color]) */}
      <div
        className={`${
          isHovered ? 'opacity-100' : 'opacity-0'
        } absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[50%] w-fit text-center bg-white dark:bg-gray-600 bg-opacity-75 dark:bg-opacity-60 z-10 transition-opacity duration-200`}>
        {!isAdded ? (
          <span
            data-testid='add'
            onClick={toggleIsAdded}>
            add
          </span>
        ) : (
          <span
            data-testid='remove'
            onClick={toggleIsAdded}>
            remove
          </span>
        )}
      </div>
      <img
        data-testid='cover'
        className='w-full h-full rounded-md object-cover'
        src={cover}
        alt={title}
        title={title}
        onClick={toggleIsAdded}
      />
      <div
        className={`${
          isHovered ? 'opacity-100' : 'opacity-0'
        } absolute bottom-0 left-0 w-full bg-white dark:bg-gray-600 bg-opacity-75 dark:bg-opacity-50 z-10 transition-opacity duration-200 p-2`}>
        <p data-testid='genre'>Genero: {genre}</p>
        <p data-testid='year'>Año: {year}</p>
        <p data-testid='author'>Autor: {author.name}</p>
      </div>
    </li>
  )
}

export default BookCard
