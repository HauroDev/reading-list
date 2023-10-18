import ThemeButton from '../buttons/ThemeButton'

const Header = () => {
  return (
    <header className='flex flex-row justify-around items-center'>
      <h1 className='text-6xl'>Learning Reading Meaning</h1>
      <ThemeButton />
    </header>
  )
}

export default Header
