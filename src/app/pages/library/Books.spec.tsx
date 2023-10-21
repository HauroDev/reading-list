import { describe, test, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import Books from './Books'
import ConfigApp from '../../components/ConfigApp'

describe('Books', () => {
  beforeEach(() => {
    render(
      <ConfigApp>
        <Books />
      </ConfigApp>
    )
  })

  afterEach(() => {
    cleanup()
  })

  describe('content of Books', () => {
    test('should render the title', () => {
      const title = screen.getByText(/books/i)
      expect(title).toBeInTheDocument()
    })

    test('should render a list of books', () => {
      const list = screen.getByRole('list')
      expect(list).toBeInTheDocument()
    })

    test('should render a reading list of books', () => {
      const readingList = screen.getByTestId('reading-list')
      expect(readingList).toBeInTheDocument()
    })
  })

  describe('list of books', () => {
    test('should render a filters', () => {
      const filters = screen.getByTestId('filters')
      expect(filters).toBeInTheDocument()
    })
  })
})
