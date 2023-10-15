import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import Books from './Books'
import BookCard from './BookCard'

describe('Books', () => {
  it('should render the component', () => {
    render(<Books />)
    const title = screen.getByText(/books/i)
    expect(title).toBeInTheDocument()
  })

  it('should render the heading "Books"', () => {
    render(<Books />)
    const title = screen.getByText(/books/i)
    expect(title).toHaveTextContent(/books/i)
  })

  it('should render a list of books', () => {
    render(<Books />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })
})

describe('BookCard', () => {
  const data: BookCardProps = {
    title: 'El Señor de los Anillos',
    genre: 'Fantasía',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
    year: 1954,
    author: {
      name: 'J.R.R. Tolkien',
      otherBooks: ['El Hobbit', 'El Silmarillion']
    }
  }

  beforeEach(() => {
    render(<BookCard {...data} />)
  })

  afterEach(() => {
    cleanup()
  })

  it('should render the component', () => {
    const card = screen.getByTestId('book-card')
    expect(card).toBeInTheDocument()
  })

  it('should render the title', () => {
    const title = screen.getByTestId('title')
    expect(title).toHaveTextContent(data.title)
  })

  it('should render the cover', () => {
    const cover = screen.getByTestId('cover')
    expect(cover).toHaveAttribute('src', data.cover)
  })

  it('should render the genre', () => {
    const genre = screen.getByTestId('genre')
    expect(genre).toHaveTextContent(data.genre)
  })

  it('should render year of publish', () => {
    const year = screen.getByTestId('year')
    expect(year).toBeInTheDocument()
  })
})
