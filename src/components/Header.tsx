import { NavLink } from 'react-router-dom'
import ThemeButton from './ThemeButton'

const Header = () => {
  return (
    <header
      data-testid='header'
      className='flex flex-col justify-around items-center border-b-2 dark:border-gray-400 border-gray-800 m-4'>
      <h1
        data-testid='principal-title'
        className='text-5xl'>
        Lectura Rápida S.A.
      </h1>

      <div className='flex flex-row justify-around items-center gap-5'>
        <nav className='flex flex-row justify-around items-center gap-5'>
          <NavLink
            className='hover:underline'
            data-testid='home-link'
            to='/'>
            Inicio
          </NavLink>
          <NavLink
            className='hover:underline'
            data-testid='library-link'
            to='/books'>
            Libros
          </NavLink>
        </nav>
        <ThemeButton />
      </div>
    </header>
  )
}

export default Header
