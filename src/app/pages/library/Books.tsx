import BookCard from './BookCard'
import { useLibrarySelector } from '../../store/hooks/useLibrarySelector'
import { useEffect } from 'react'
import { useLibraryDispatch } from '../../store/hooks/useLibraryDispatch'
import { fetchBooks } from '../../store/slices/library/async/fetchBooks'
import ReadingList from './ReadingList'

const Books = (): JSX.Element => {
  const { books } = useLibrarySelector()
  const dispatch = useLibraryDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <section className='relative w-full flex justify-center items-start p-5'>
      <article data-testid='books'>
        <h2 className='text-4xl italic text-center'>Books</h2>
        <div data-testid='filters'></div>
        <ul
          data-testid='books-list'
          className='grid gap-x-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 place-content-center'>
          {books.length !== 0 &&
            books.map((book: Book) => (
              <BookCard
                key={book.book.ISBN}
                ISBN={book.book.ISBN}
                title={book.book.title}
                genre={book.book.genre}
                cover={book.book.cover}
                year={book.book.year}
                author={book.book.author}
              />
            ))}
        </ul>
      </article>
      <span className='absolute right-0 top-0'></span>
      <article className=''>
        <ReadingList />
      </article>
    </section>
  )
}

export default Books
