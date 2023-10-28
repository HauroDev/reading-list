import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import { cleanup, screen } from '@testing-library/react'

import { renderWithProviders } from '../../utils/utils-for-test'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ReadingList from '../../features/library/components/ReadingList'
import { initialState } from './testingState'

describe('ReadingList', () => {
  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<ReadingList />}
          />
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

  describe('content of ReadingList', () => {
    test('should render the title', () => {
      const title = screen.getByText(/Lista de lectura/)
      expect(title).toBeInTheDocument()
    })

    test('should render a paragraph with information of action', () => {
      const paragraph = screen.getByText(
        /Oprime los que quieres eliminar de tu lista de lectura/i
      )
      expect(paragraph).toBeInTheDocument()
    })

    test('should render a list of books', () => {
      const list = screen.getByTestId('books-list')

      expect(list).toBeInTheDocument()
    })
  })
})
