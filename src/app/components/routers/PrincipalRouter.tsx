import { NavLink, Route, Routes } from 'react-router-dom'
import Books from '../../pages/library/Books'
import BookDetail from '../../pages/library/BookDetail'
import Home from '../../pages/home/Home'

const PrincipalRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/books'
        element={<Books />}
      />
      <Route
        path='/books/:ISBN'
        element={<BookDetail />}
      />
      <Route>
        <Route
          path='*'
          element={
            <div className='flex flex-col justify-center items-center gap-2'>
              <h2 className='text-8xl font-bold text-stone-500 '>Error 404</h2>
              <p className='text-xl text-red-300 my-10'>
                esta pagina no existe
              </p>
              <NavLink to='/books'>Volver</NavLink>
            </div>
          }
        />
      </Route>
    </Routes>
  )
}

export default PrincipalRouter
