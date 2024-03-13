import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import dayjs from "dayjs"

import { DateTimeFormatEnum } from "@/enums/datetime-format.enum"
import { ROUTES } from "@/routes"
import { formatRoute } from "@/utils/format-route/format-route.util"

import { FormCard } from "../form-card"

describe("Form Card", () => {
    it("render the form card", () => {
        render(<FormCard id={1} title="dummy form title" updated_at={"Edited 12hours ago"} status={"draft"} />)
        const element = screen.getByTestId("formCard")

        expect(element).toBeInTheDocument()
    })

    it("check if id, title, status & updated_at gets applied", () => {
        const currentDate = new Date("Sun Jan 07 2024 16:05:19 GMT+0000").toISOString()
        const formattedDate = dayjs(currentDate).format(DateTimeFormatEnum.ddMmYyyWithSlash)

        render(<FormCard id={1} title="dummy form title" updated_at={currentDate} status={"draft"} />)
        const formCard = screen.getByTestId("formCard")
        const updatedAtTime = screen.getByTestId("updatedAtTime")
        const anchorLink = screen.getByRole("link")

        expect(formCard).toBeInTheDocument()
        expect(formCard).toHaveTextContent("dummy form title")
        expect(formCard).toHaveTextContent("draft")
        expect(updatedAtTime).toHaveTextContent(formattedDate)
        expect(anchorLink).toHaveAttribute("href", formatRoute(ROUTES.forms.edit, { id: 1 }))
    })
})
