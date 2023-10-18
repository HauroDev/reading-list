import { describe, test, expect, beforeEach, afterEach } from 'vitest'
import BookCard from './BookCard'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookDetail from './BookDetail'
import { Provider } from 'react-redux'
import store from '../../store/store'

/**
 * @vitest-environment jsdom
 */

describe('BookCard', () => {
  const data: BookCardProps = {
    title: 'El Señor de los Anillos',
    genre: 'Fantasía',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
    year: 1954,
    ISBN: '978-0618640157',
    author: {
      name: 'J.R.R. Tolkien',
      otherBooks: ['El Hobbit', 'El Silmarillion']
    }
  }

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Routes>
          <Route
            path='/'
            element={<BookCard {...data} />}
          />
          <Route
            path='/books/:ISBN'
            element={<BookDetail />}
          />
        </Routes>
      </Provider>,
      {
        wrapper: BrowserRouter
      }
    )
  })

  afterEach(() => {
    cleanup()
  })

  test('should render the component', () => {
    const card = screen.getByTestId('book-card')
    expect(card).toBeInTheDocument()
  })

  test('should render the title', () => {
    const title = screen.getByTestId('title')
    expect(title).toHaveTextContent(data.title)
  })

  test('should render the cover', () => {
    const cover = screen.getByTestId('cover')
    expect(cover).toHaveAttribute('src', data.cover)
  })

  test('should render the genre', () => {
    const genre = screen.getByTestId('genre')
    expect(genre).toHaveTextContent(data.genre)
  })

  test('should render year of publish', () => {
    const year = screen.getByTestId('year')
    expect(year).toBeInTheDocument()
  })

  test('should render the author', () => {
    const author = screen.getByTestId('author')
    expect(author).toHaveTextContent(data.author.name)
  })

  test('should render an "addition prompt" in the component', () => {
    const addIndicator = screen.getByTestId('add')
    expect(addIndicator).toBeInTheDocument()
  })

  test('should render a "subtraction prompt" on the cover after clicking it', () => {
    fireEvent.click(screen.getByTestId('cover'))

    const removeIndicator = screen.getByTestId('remove')
    expect(removeIndicator).toBeInTheDocument()
  })

  test('should redirect to the book detail page', () => {
    fireEvent.click(screen.getByTestId('title'))

    expect(screen.getByTestId('book-detail')).toBeInTheDocument()
  })
})
