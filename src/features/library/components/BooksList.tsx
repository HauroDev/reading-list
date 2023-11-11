import { useEffect } from 'react'

import ListOfBooks from './ListOfBooks'
import Filters from './Filters'
import BookCard from './BookCard'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectorLibrary, fetchBooks, fetchFilters } from '../librarySlice'

const Books = (): JSX.Element => {
  const filterBooks = useAppSelector(selectorLibrary.selectFilterBooks)
  const readingList = useAppSelector(selectorLibrary.selectReadingList)

  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchingData() {
      const allFetching = [dispatch(fetchBooks()), dispatch(fetchFilters())]

      await Promise.all(allFetching)
    }

    fetchingData()
  }, [])

  return (
    <article
      data-testid='books'
      className='flex flex-col w-[60%] items-start gap-2'>
      <h2 className='text-4xl italic text-center'>
        <span>{filterBooks.length}</span>{' '}
        {filterBooks.length > 1 ? 'Libros Disponibles' : 'Libro Disponible'}
      </h2>

      <p className='text-sm dark:text-gray-400 text-gray-800'>
        {readingList.length}{' '}
        {readingList.length > 1
          ? 'Libros en lista de lectura'
          : 'Libro en lista de lectura'}
      </p>

      <Filters />
      <ListOfBooks
        className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4'
        books={filterBooks}
        callback={(book: Book) => (
          <BookCard
            key={book.book.ISBN}
            ISBN={book.book.ISBN}
            title={book.book.title}
            genre={book.book.genre}
            cover={book.book.cover}
            year={book.book.year}
            author={book.book.author}
          />
        )}
      />
    </article>
  )
}

export default Books
