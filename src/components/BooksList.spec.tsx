import { describe, test, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import BooksList from './BooksList'
import ConfigApp from './ConfigApp'

describe('BooksList', () => {
  beforeEach(() => {
    render(
      <ConfigApp>
        <BooksList />
      </ConfigApp>
    )
  })

  afterEach(() => {
    cleanup()
  })

  describe('content of Books', () => {
    test('should render the title', () => {
      const title = screen.getByTestId('books-title')
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
