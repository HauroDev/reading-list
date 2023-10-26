import { Route, Routes } from 'react-router-dom'
import Library from '../features/library/Library'
import BookDetail from './BookDetail'
import Home from './Home'
import ErrorPage from './ErrorPage'

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
