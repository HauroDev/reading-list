import { useEffect, useState } from 'react'
import BooksList from './components/BooksList'
import ReadingList from './components/ReadingList'

const Library = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [windowWidth, setWindowWidth] = useState<number>(globalThis.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(globalThis.innerWidth)
    globalThis.addEventListener('resize', handleResize)
    return () => globalThis.removeEventListener('resize', handleResize)
  }, [windowWidth])

  return (
    <section className='relative w-full flex gap-2 justify-center items-start p-4 lg:w-3/5 lg:mx-auto'>
      {windowWidth <= 768 ? (
        <>
          <button
            className='absolute top-5 right-5 bg-blue-600 hover:bg-blue-800 text-white w-8 h-8 rounded-full active:rotate-180 active:bg-blue-700 duration-200'
            onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? '>' : '<'}
          </button>
          {!isVisible ? <BooksList /> : <ReadingList />}
        </>
      ) : (
        <>
          <BooksList />
          <ReadingList />
        </>
      )}
    </section>
  )
}

export default Library
