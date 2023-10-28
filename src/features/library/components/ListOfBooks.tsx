const ListOfBooks = ({
  books,
  callback,
  className = ''
}: {
  books: Book[]
  callback: (book: Book) => JSX.Element
  className?: string
}) => {
  return (
    <ul
      data-testid='books-list'
      className={className}>
      {books.length !== 0 ? (
        books.map(callback)
      ) : (
        <span className='text-2xl col-span-full'>
          Lo siento, no se encontraron libros
        </span>
      )}
    </ul>
  )
}

export default ListOfBooks
