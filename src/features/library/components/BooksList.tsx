import { useEffect } from 'react'

import ListOfBooks from './ListOfBooks'
import Filters from './Filters'
import BookCard from './BookCard'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectorLibrary, fetchBooks, fetchFilters } from '../librarySlice'

const Books = (): JSX.Element => {
  const filterBooks = useAppSelector(selectorLibrary.selectFilterBooks)

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
      className='relative w-[70%] flex flex-col justify-center items-center p-5 gap-2'>
      <h2 className='text-4xl italic text-center'>Libros</h2>
      <Filters />
      <ListOfBooks
        className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4'
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
