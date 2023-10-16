import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import Books from './Books'
import { Provider } from 'react-redux'
import store from '../../store/store'

describe('Books', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Books />
      </Provider>
    )
  })

  afterEach(() => {
    cleanup()
  })

  it('should render the component', () => {
    const title = screen.getByText(/books/i)
    expect(title).toBeInTheDocument()
  })

  it('should render the heading "Books"', () => {
    const title = screen.getByText(/books/i)
    expect(title).toHaveTextContent(/books/i)
  })

  it('should render a list of books', () => {
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })
})
