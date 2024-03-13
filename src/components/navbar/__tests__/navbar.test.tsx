import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import mockRouter from "next-router-mock"

import { Navbar } from ".."
import { NAVBAR_LINKS } from "../navbar.constants"

jest.mock("next/router", () => jest.requireActual("next-router-mock"))

describe("Navbar", () => {
    it("renders the Navbar correctly", () => {
        render(<Navbar />)

        // Check that the correct number of links are displayed
        const links = screen.getAllByRole("link")
        expect(links.length).toBe(NAVBAR_LINKS.length)

        // Check that each link has the correct text and href
        NAVBAR_LINKS.forEach((link, index) => {
            expect(links[index]).toHaveTextContent(link.title)
            expect(links[index]).toHaveAttribute("href", link.href)
        })
    })

    it("check if the active link is highlighted", () => {
        const firstLink = NAVBAR_LINKS[0]
        mockRouter.setCurrentUrl(firstLink.href)

        render(<Navbar />)

        const activeLink = screen.getByTestId(firstLink.title.toLowerCase())
        expect(activeLink).toHaveAttribute("data-isactive", "true")
    })
})
