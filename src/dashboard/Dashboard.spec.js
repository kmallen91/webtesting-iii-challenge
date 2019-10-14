// Test away

import React from 'react'
import Dashboard from './Dashboard'
import {render, fireEvent} from '@testing-library/react'

test('Renders', () => {
    expect(render(<Dashboard />)).toMatchSnapshot()
})

