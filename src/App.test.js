import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('renders w/o error', () => {
    const { getByText } = render(<App />)
    const node = getByText(/Incrementor/)
    expect(node).toBeInTheDocument()
  })
})
