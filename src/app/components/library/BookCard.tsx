import { useState } from 'react'

const BookCard = ({
  title,
  genre,
  cover,
  year,
  author
}: BookCardProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <li
      data-testid='book-card'
      className='relative flex flex-col items-center rounded-md dark:shadow-gray-800 shadow-gray-400 shadow-xl hover:shadow-none transition-shadow duration-200 h-[20rem] w-[15rem]'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <h2
        className={`${
          isHovered ? 'opacity-100' : 'opacity-0'
        } absolute top-0 left-0 w-full text-center bg-white dark:bg-gray-600 bg-opacity-75 dark:bg-opacity-60 z-10 transition-opacity duration-200`}
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
        } absolute bottom-0 left-0 w-full bg-white dark:bg-gray-600 bg-opacity-75 dark:bg-opacity-50 z-10 transition-opacity duration-200 p-2`}>
        <p data-testid='genre'>Genero: {genre}</p>
        <p data-testid='year'>Año: {year}</p>
        <p data-testid='author'>Autor: {author.name}</p>
      </div>
    </li>
  )
}

export default BookCard
