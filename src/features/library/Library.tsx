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
            className='absolute top-5 right-5 bg-blue-500 text-white p-2 rounded-md'
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
