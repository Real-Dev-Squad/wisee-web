import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Navbar } from '..'
import { NAVBAR_LINKS } from '../navbar.constants'

describe('Navbar', () => {
    it('renders the Navbar correctly', () => {
        render(<Navbar />)

        // Check that the correct number of links are displayed
        const links = screen.getAllByRole('link');
        expect(links.length).toBe(NAVBAR_LINKS.length);

        // Check that each link has the correct text and href
        NAVBAR_LINKS.forEach((link, index) => {
            expect(links[index]).toHaveTextContent(link.title);
            expect(links[index]).toHaveAttribute('href', link.href);
        });
    })
})
