import { Route, Routes } from 'react-router-dom'
import Library from '../../pages/library/Library'
import BookDetail from '../../pages/library/components/BookDetail'
import Home from '../../pages/home/Home'
import ErrorPage from '../ErrorPage'

const PrincipalRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/books'
        element={<Library />}
      />
      <Route
        path='/books/:ISBN'
        element={<BookDetail />}
      />
      <Route>
        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Route>
    </Routes>
  )
}

export default PrincipalRouter
