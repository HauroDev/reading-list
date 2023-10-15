import ThemeButton from '../buttons/ThemeButton'

const Header = () => {
  return (
    <header>
      <div className='flex flex-row justify-around items-center'>
        <h1 className='text-6xl'>Learning Reading Meaning</h1> <ThemeButton />
      </div>
    </header>
  )
}

export default Header
