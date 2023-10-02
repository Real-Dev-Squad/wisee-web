import { render, screen } from '@testing-library/react'

import { Button } from "../button"
import '@testing-library/jest-dom'

describe('Button', () => {
    it('renders a text button', () => {
        render(<Button>Click me</Button>)

        const button = screen.getByRole('button', {
            name: 'Click me'
        })

        expect(button).toBeInTheDocument()
    })

    it('renders a text button with a loading indicator', () => {
        render(<Button loading>Click me</Button>)

        const button = screen.getByRole('button', {
            name: 'Click me'
        })

        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute('data-loading')
    })

    it('renders a text button with disabled state', () => {
        render(<Button disabled>Click me</Button>)

        const button = screen.getByRole('button', {
            name: 'Click me'
        })

        expect(button).toBeInTheDocument()
        expect(button).toBeDisabled()
    })
})
