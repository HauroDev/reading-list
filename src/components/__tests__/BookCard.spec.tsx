import { describe, test, expect, beforeEach, afterEach } from 'vitest'
import { screen, cleanup, fireEvent } from '@testing-library/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BookDetail from '../../features/library/components/BookDetail'
import BookCard from '../../features/library/components/BookCard'
import { renderWithProviders } from '../../utils/utils-for-test'

import { act } from 'react-dom/test-utils'
import { initialState } from './testingState'

describe('BookCard', () => {
  const data: BookCardProps = initialState.books[0].book

  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route
              index
              element={<BookCard {...data} />}
            />
            <Route
              path='/books/:ISBN'
              element={<BookDetail />}
            />
          </Route>
        </Routes>
      </BrowserRouter>,
      {
        preloadedState: {
          library: initialState
        }
      }
    )
  })

  afterEach(() => {
    cleanup()
  })

  describe('content of BookCard', () => {
    test('should render the component', () => {
      const card = screen.getByTestId('book-card')
      expect(card).toBeInTheDocument()
    })

    test('should render the title', () => {
      const title = screen.getByTestId('book-card-title')
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
  })

  describe('clicking on the card', () => {
    test('should render an "addition prompt" in the component', () => {
      const addIndicator = screen.getByTestId('add')
      expect(addIndicator).toBeInTheDocument()
    })

    test('should render a "subtraction prompt" on the cover after clicking it', () => {
      act(() => {
        fireEvent.click(screen.getByTestId('cover'))
      })

      const removeIndicator = screen.getByTestId('remove')
      expect(removeIndicator).toBeInTheDocument()
    })

    test('should redirect to the book detail page', () => {
      act(() => {
        fireEvent.click(screen.getByTestId('book-card-title'))
      })

      expect(window.location.pathname).toBe('/books/978-0618640157')
    })
  })
})
