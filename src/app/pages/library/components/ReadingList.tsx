import { useState } from 'react'
import PlusCircle from '../../../components/icons/PlusCircle'
import XCircle from '../../../components/icons/XCircle'
import ListOfBooks from './ListOfBooks'
import ReadingCard from './cards/ReadingCard'

const ReadingList = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false)

  const toggleIsHidden = () => setIsHidden(!isHidden)

  return (
    <>
      <button
        onClick={toggleIsHidden}
        className='absolute right-10 top-6 z-50'>
        {!isHidden ? <PlusCircle /> : <XCircle />}
      </button>
      <article
        data-testid='reading-list'
        className={`${
          !isHidden ? 'hidden' : 'block'
        } absolute z-30 dark:bg-gray-950 bg-white w-[calc(100%-5rem)] h-[calc(100%-3rem)] flex flex-col items-center shadow-xl duration-200`}>
        <h2 className='text-4xl italic text-center'>Reading List</h2>

        <ListOfBooks
          callback={(book: Book) => (
            <ReadingCard
              key={book.book.ISBN}
              title={book.book.title}
              genre={book.book.genre}
              cover={book.book.cover}
              year={book.book.year}
              author={book.book.author}
            />
          )}
          books={[]}
        />
      </article>
    </>
  )
}

export default ReadingList
