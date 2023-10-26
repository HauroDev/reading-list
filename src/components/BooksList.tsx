import BookCard from './BookCard'
import { useEffect } from 'react'
import { fetchBooks } from '../features/library/fetchBooks'
import ListOfBooks from './ListOfBooks'

import Filters from './Filters'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchFilters } from '../features/library/fetchFilters'

const Books = (): JSX.Element => {
  const { filterBooks } = useAppSelector((state) => state.library)

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
      className='relative w-full flex flex-col justify-center items-center p-5 gap-2 '>
      <h2
        data-testid='books-title'
        className='text-4xl italic text-center'>
        Books
      </h2>
      <Filters />
      <ListOfBooks
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
