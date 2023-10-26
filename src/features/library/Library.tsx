import Books from '../../components/BooksList'
import ReadingList from '../../components/ReadingList'

const Library = () => {
  return (
    <section className='relative w-full flex justify-center items-center gap-2'>
      <Books />
      <ReadingList />
    </section>
  )
}

export default Library
