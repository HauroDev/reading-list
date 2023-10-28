import ReadingCard from './ReadingCard'
import { useAppSelector } from '../../../app/hooks'
import { selectorLibrary } from '../librarySlice'
import ListOfBooks from './ListOfBooks'

const ReadingList = () => {
  const readingList = useAppSelector(selectorLibrary.selectReadingList)

  return (
    <>
      <article className='flex flex-col w-[20rem] items-start gap-2'>
        <h2 className='text-xl italic'>Lista de lectura</h2>
        <p className='text-sm dark:text-gray-400 text-gray-800'>
          Oprime los que quieres eliminar de tu lista de lectura
        </p>
        <ListOfBooks
          className='grid gap-2 grid-cols-1 sm:grid-cols-2 pr-4'
          books={readingList}
          callback={(book) => (
            <ReadingCard
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
    </>
  )
}

export default ReadingList
