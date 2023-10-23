import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import ConfigApp from '../../../components/ConfigApp'
import ReadingList from './ReadingList'
import { cleanup, render, screen } from '@testing-library/react'

describe('ReadingList', () => {
  beforeEach(() => {
    render(
      <ConfigApp>
        <ReadingList />
      </ConfigApp>
    )
  })

  afterEach(() => {
    cleanup()
  })

  describe('content of ReadingList', () => {
    test('should render the title', () => {
      const title = screen.getByText(/reading list/i)
      expect(title).toBeInTheDocument()
    })

    test('should render a list of books', () => {
      const list = screen.getByTestId('books-list')
      expect(list).toBeInTheDocument()
    })
  })
})
