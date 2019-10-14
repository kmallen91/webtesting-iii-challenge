// Test away!

import React from 'react'
import Display from './Display'
import { render, fireEvent } from '@testing-library/react'

test('Renders', () => {
    expect(render(<Display />)).toMatchSnapshot()
})

test('toggle lock', () => {
    const toggleClosed = jest.fn()
    const toggleLocked = jest.fn()
    const { getByText } = render(
        <Controls toggleLocked={toggleLocked} toggleClosed={toggleClosed} />
    )
    fireEvent.click(getByText(/toggle locked/i))
    expect(toggleLocked).toHaveBeenCalled(true)

    fireEvent.click(getByText(/toggle closed/i))
    expect(toggleClosed).toHaveBeenCalled(true)
})