import Header from './components/header/Header'
import Books from './components/library/Books'

function App(): JSX.Element {
  return (
    <div className='text-gray-800 dark:text-gray-200 dark:bg-gray-950'>
      <Header />
      <Books />
    </div>
  )
}

export default App
