import { Route, Routes } from 'react-router-dom'
import Books from '../library/Books'
import BookDetail from '../library/BookDetail'

const PrincipalRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Books />}
      />
      <Route
        path='/books/:ISBN'
        element={<BookDetail />}
      />
    </Routes>
  )
}

export default PrincipalRouter
