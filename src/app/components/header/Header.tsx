import { NavLink } from 'react-router-dom'
import ThemeButton from '../buttons/ThemeButton'

const Header = () => {
  return (
    <header
      data-testid='header'
      className='flex flex-col justify-around items-center border-b-2 dark:border-gray-400 border-gray-800 m-4'>
      <h1
        data-testid='principal-title'
        className='text-5xl'>
        Learning Reading Meaning
      </h1>

      <div className='flex flex-row justify-around items-center gap-5'>
        <nav className='flex flex-row justify-around items-center gap-5'>
          <NavLink
            className='hover:underline'
            data-testid='home-link'
            to='/'>
            Home
          </NavLink>
          <NavLink
            className='hover:underline'
            data-testid='library-link'
            to='/books'>
            Books
          </NavLink>
        </nav>
        <ThemeButton />
      </div>
    </header>
  )
}

export default Header
