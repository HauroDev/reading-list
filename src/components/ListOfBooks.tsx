const ListOfBooks = ({
  books,
  callback
}: {
  books: Book[]
  callback: (book: Book) => JSX.Element
}) => {
  return (
    <ul
      data-testid='books-list'
      className='grid gap-x-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 place-content-center'>
      {books.length !== 0 ? (
        books.map(callback)
      ) : (
        <span className='text-5xl col-span-full'>Sorry, no books found</span>
      )}
    </ul>
  )
}

export default ListOfBooks
