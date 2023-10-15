interface BookProps {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: {
    name: string
    otherBooks: string[]
  }
}

type BookCardProps = Pick<
  BookProps,
  'title' | 'genre' | 'cover' | 'year' | 'author'
>

interface Book {
  book: BookProps
}

interface Library {
  library: Book[]
}
