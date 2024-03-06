import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Sidebar } from '..'
import { SIDEBAR_LINKS } from '../sidebar.constants'

describe('Sidebar', () => {
    it('renders the sidebar correctly', () => {
        render(<Sidebar />)

        // Check that the app name is displayed
        const appName = process.env.NEXT_PUBLIC_APP_NAME;
        if (!appName) throw new Error('App name is not defined');

        expect(screen.getByText(appName)).toBeInTheDocument();

        // Check that the correct number of links are displayed
        const links = screen.getAllByRole('link');
        expect(links.length).toBe(SIDEBAR_LINKS.length);

        // Check that each link has the correct text and href
        SIDEBAR_LINKS.forEach((link, index) => {
            expect(links[index]).toHaveTextContent(link.title);
            expect(links[index]).toHaveAttribute('href', link.href);
        });
    })
})
