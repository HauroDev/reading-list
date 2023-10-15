import BookCard from './BookCard'
import { useLibrarySelector } from '../../store/hooks/useLibrarySelector'
import { useEffect } from 'react'
import { useLibraryDispatch } from '../../store/hooks/useLibraryDispatch'
import { fetchBooks } from '../../store/services/fetchBooks'

const Books = (): JSX.Element => {
  const booksList = useLibrarySelector()
  const dispatch = useLibraryDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  return (
    <section className='w-full grid place-content-center p-5'>
      <ul className='grid gap-x-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 place-content-center'>
        <h2 className='col-span-full text-4xl italic text-center'>Books</h2>
        {booksList.map((book: Book) => (
          <BookCard
            key={book.book.ISBN}
            title={book.book.title}
            genre={book.book.genre}
            cover={book.book.cover}
            year={book.book.year}
            author={book.book.author}
          />
        ))}
      </ul>
    </section>
  )
}

export default Books
