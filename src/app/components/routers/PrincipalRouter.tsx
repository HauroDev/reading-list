import { NavLink, Route, Routes } from 'react-router-dom'
import Books from '../library/Books'
import BookDetail from '../library/BookDetail'

const PrincipalRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className='flex flex-col justify-center items-center gap-2'>
            <h2 className='text-8xl font-bold text-stone-500 '>Oops</h2>
            <p className='text-xl text-cyan-300 my-10'>
              En Construcción, mil disculpas
            </p>
            <NavLink to='/books'>Volver</NavLink>
          </div>
        }
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
