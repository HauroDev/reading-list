import { describe, test, expect, beforeEach, afterEach } from 'vitest'
import { screen, cleanup } from '@testing-library/react'
import BooksList from '../../features/library/components/BooksList'

import { renderWithProviders } from '../../utils/utils-for-test'

import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import { initialState } from './testingState'

describe('BooksList', () => {
  beforeEach(async () => {
    await act(async () => {
      renderWithProviders(
        <MemoryRouter initialEntries={['/books']}>
          <Routes>
            <Route
              path='/books'
              element={<BooksList />}
            />
          </Routes>
        </MemoryRouter>,
        {
          preloadedState: {
            library: initialState
          }
        }
      )
    })
  })

  afterEach(() => {
    cleanup()
  })

  describe('content of Books', () => {
    test('should render the title', () => {
      const title = screen.getByText(/Libros/i)
      expect(title).toBeInTheDocument()
    })

    test('should render a list of books', () => {
      const list = screen.getByTestId('books-list')
      expect(list).toBeInTheDocument()
    })
  })

  describe('list of books', () => {
    test('should render a filters', () => {
      const filters = screen.getByTestId('filters')
      expect(filters).toBeInTheDocument()
    })
  })
})
