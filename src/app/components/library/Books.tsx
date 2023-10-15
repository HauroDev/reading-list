import { useSelector } from 'react-redux'
import BookCard from './BookCard'
import { RootState } from '../../redux/store/store'

const Books = (): JSX.Element => {
  const booksList = useSelector((state: RootState) => state.library.library)

  return (
    <section className='w-full grid place-content-center p-5'>
      <ul className='grid md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-5 place-items-center'>
        <h2 className='col-span-full text-4xl italic text-center'>Books</h2>
        {booksList.map((book) => (
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
