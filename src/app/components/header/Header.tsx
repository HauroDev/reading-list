import { NavLink } from 'react-router-dom'
import ThemeButton from '../buttons/ThemeButton'

const Header = () => {
  return (
    <header
      data-testid='header'
      className='flex flex-row justify-around items-center'>
      <h1
        data-testid='principal-title'
        className='text-5xl'>
        Learning Reading Meaning
      </h1>
      <ThemeButton />

      <nav className='flex flex-row justify-around items-center'>
        <NavLink
          data-testid='home-link'
          to='/'>
          Home
        </NavLink>
        <NavLink
          data-testid='library-link'
          to='/books'>
          Books
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
