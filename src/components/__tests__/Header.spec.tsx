import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import { cleanup, fireEvent, screen } from '@testing-library/react'
import Header from '../Header'

import { act } from 'react-dom/test-utils'
import { renderWithProviders } from '../../utils/utils-for-test'
import { BrowserRouter } from 'react-router-dom'
import { initialState } from './testingState'

describe('Header', () => {
  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <Header />
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

  describe('content of Header', () => {
    test('should have a title', () => {
      const title = screen.getByText(/lectura rápida s.a./i)
      expect(title).toBeInTheDocument()
    })

    test('should have a theme button', () => {
      const themeButton = screen.getByRole('button')
      expect(themeButton).toBeInTheDocument()
    })

    test('should have the navigation bar', () => {
      const navBar = screen.getByRole('navigation')
      expect(navBar).toBeInTheDocument()
    })
  })

  describe('theme button', () => {
    test('should toggle the theme', () => {
      const themeButton = screen.getByRole('button')
      expect(themeButton).toBeInTheDocument()

      const theme = localStorage.getItem('theme')

      if (theme === 'light') {
        act(() => {
          fireEvent.click(themeButton)
        })
        expect(themeButton).toHaveClass('dark')
      } else {
        act(() => {
          fireEvent.click(themeButton)
        })
        expect(themeButton).not.toHaveClass('dark')
      }
    })
  })

  describe('navigation bar', () => {
    test('should have links to home and library', () => {
      const toHome = screen.getByTestId('home-link')
      expect(toHome).toBeInTheDocument()

      const toLibrary = screen.getByTestId('library-link')
      expect(toLibrary).toBeInTheDocument()
    })
    test('should redirect to the home page', () => {
      const toHome = screen.getByTestId('home-link')
      fireEvent.click(toHome)

      expect(window.location.pathname).toBe('/')
    })
    test('should redirect to the library page', () => {
      const toLibrary = screen.getByTestId('library-link')
      fireEvent.click(toLibrary)

      expect(window.location.pathname).toBe('/books')
    })
  })
})
