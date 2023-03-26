import React from "react"
import { render, screen } from "@testing-library/react"

import { Home } from "../pages"

describe("Home page mount", () => {
  it("must display the main page title", () => {
    render(<Home />)
    expect(screen.getByText('The Pokemon list!')).toBeInTheDocument()
  })
})