import { useEffect } from 'react'
import { useLibrarySelector } from '../../store/hooks/useLibrarySelector'
import { useLibraryDispatch } from '../../store/hooks/useLibraryDispatch'
import { useParams } from 'react-router-dom'
import { setBookDetail } from '../../store/slices/library/library'

const BookDetail = () => {
  const dispatch = useLibraryDispatch()
  const { ISBN } = useParams()
  const {
    bookDetail: { book }
  } = useLibrarySelector()

  useEffect(() => {
    dispatch(setBookDetail(ISBN as string))
  }, [])

  return (
    <div data-testid='book-detail'>
      <h2>{book?.title}</h2>
      <img
        src={book?.cover}
        alt={book?.title}
      />
      <p>{book?.synopsis}</p>
      <p>{book?.year}</p>
      <p>{book?.author.name}</p>
      <p>{book?.author.otherBooks.join(', ')}</p>
      <p>{book?.genre}</p>
    </div>
  )
}

export default BookDetail
