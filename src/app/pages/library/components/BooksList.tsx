import BookCard from './cards/BookCard'
import { useLibrarySelector } from '../../../store/hooks/useLibrarySelector'
import { useEffect } from 'react'
import { useLibraryDispatch } from '../../../store/hooks/useLibraryDispatch'
import { fetchBooks } from '../../../store/utils/fetchBooks'
import ListOfBooks from './ListOfBooks'
import { useFilterDispatch } from '../../../store/hooks/useFilterDispatch'
import { loadDataFilters } from '../../../store/utils/loadDataFilters'
import Filters from './Filters'

const Books = (): JSX.Element => {
  const { books } = useLibrarySelector()
  const dispatchLibrary = useLibraryDispatch()
  const dispatchFilter = useFilterDispatch()

  useEffect(() => {
    dispatchLibrary(fetchBooks()).then(() => {
      dispatchFilter(loadDataFilters())
    })
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
        books={books}
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
