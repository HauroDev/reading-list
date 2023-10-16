import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import BookCard from './BookCard'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

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

  it('should render the author', () => {
    const author = screen.getByTestId('author')
    expect(author).toHaveTextContent(data.author.name)
  })

  it('should render an "addition prompt" in the component', () => {
    const button = screen.getByTestId('add')
    expect(button).toBeInTheDocument()
  })

  it('should render a "subtraction prompt" on the cover after clicking it', () => {
    fireEvent.click(screen.getByTestId('cover'))

    const deleteButton = screen.getByTestId('remove')
    expect(deleteButton).toBeInTheDocument()
  })
})
