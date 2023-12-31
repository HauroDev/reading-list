import { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { selectorLibrary, setBookDetail } from '../librarySlice'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'

const BookDetail = () => {
  const dispatch = useAppDispatch()
  const { ISBN } = useParams()
  const { book } = useAppSelector(selectorLibrary.selectBookDetail)

  useEffect(() => {
    dispatch(setBookDetail(ISBN as string))
  }, [ISBN, dispatch])

  return (
    <article
      data-testid='book-detail'
      className='flex flex-col sm:flex-row justify-center items-center gap-2 p-5 sm:p-2'>
      <img
        className='w-[10rem]'
        src={book?.cover}
        alt={book?.title}
      />
      <div className='flex flex-col max-w-lg'>
        <h2 className='text-2xl font-bold text-stone-500 duration-200'>
          {book?.title}
        </h2>
        <p
          className='text-sm text-cyan-300 my-1'
          title='Autor del libro'>
          Autor: {book?.author.name}
        </p>
        <p className='mb-6'>
          <span title='Año de publicación'>{book?.year}</span> -{' '}
          <span title='Número de páginas'>{book?.pages}</span>{' '}
          {book?.pages > 1 ? 'páginas' : 'página'}
        </p>
        <p className='text-blue-400'>
          <span className='italic font-bold'>Otros libros:</span>{' '}
          {book?.author?.otherBooks.join(' - ')}
        </p>
        <p className='sm:w-[50ch] mb-3'>{book?.synopsis}</p>
        <p>
          <span className='font-bold bg-gradient-to-br from-cyan-400 via-blue-500 to-sky-600 rounded-xl px-2 py-1'>
            {book?.genre}
          </span>
        </p>
      </div>
    </article>
  )
}

export default BookDetail
