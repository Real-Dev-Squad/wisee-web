import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { ROUTES } from '@/routes'
import { formatRoute } from '@/utils/format-route/form-route.util'

import { FormCard } from '../form-card'

describe('Form Card', () => {
    it("render the form card", () => {
        render(<FormCard id={1} title="dummy form title" updated_at={"Edited 12hours ago"} status={'draft'} />)
        const element = screen.getByTestId('form_card')

        expect(element).toBeInTheDocument()
    })

    it("check if id, title, status & updated_at gets applied", () => {
        render(<FormCard id={1} title="dummy form title" updated_at={"Edited 12hours ago"} status={'draft'} />)
        const element = screen.getByTestId('form_card')
        const anchorLink = screen.getByRole('link')

        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent('dummy form title')
        expect(element).toHaveTextContent('draft')
        expect(element).toHaveTextContent('Edited 12hours ago')
        expect(anchorLink).toHaveAttribute('href', formatRoute(ROUTES.forms.edit, { id: 1 }))
    })
})
