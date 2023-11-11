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
    <section className='relative w-full flex gap-4 justify-center items-start p-4'>
      {windowWidth <= 640 ? (
        <>
          <button
            className='fixed z-50 top-15 right-5 bg-blue-600 hover:bg-blue-800 text-white w-auto px-2 h-8 rounded-full active:bg-blue-700 duration-100'
            onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? 'Ocultar' : 'Mostrar'} Selección
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
