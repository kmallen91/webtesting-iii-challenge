// Test away!
import React from 'react'
import { render, fireEvent} from '@testing-library/react'

import Controls from './Controls'

test('Renders', () => {
    expect(render(<Controls />)).toMatchSnapshot()
})

test('toggle lock', () => {
    const toggleLocked = jest.fn()
    const { getByText } = render(
        <Controls toggleLocked={toggleLocked} />
    )
    fireEvent.click(getByText(/toggle locked/i))
    expect(toggleLocked).toHaveBeenCalled()
})