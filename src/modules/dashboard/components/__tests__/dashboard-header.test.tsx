import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { DashboardHeader } from '..'

describe('DashboardHeader', () => {
    it('renders the header correctly', () => {
        render(<DashboardHeader />)

        // check if search bar is displayed & the placeholder text is correct
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()

        // check if the create form button is displayed
        expect(screen.getByText('Create Form')).toBeInTheDocument()
    })

    it('check if id & className gets applied', () => {
        render(<DashboardHeader className="test-class" />)
        const element = screen.getByTestId('dashboard_header')

        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('test-class')
    })
})
