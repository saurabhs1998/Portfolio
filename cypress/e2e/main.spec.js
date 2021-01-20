describe("IndexPage", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("renders", () => {
    cy.findByTestId("animated-heading").should("exist")
  })

  it("renders all sections", () => {
    cy.get("#hero").should("exist")
    cy.get("#articles").should("exist")
    cy.get("#about").should("exist")
    cy.get("#interests").should("exist")
    cy.get("#projects").should("exist")
    cy.get("#contact").should("exist")
  })

  it("is animated", () => {
    cy.wait(2000) // wait for animation
    cy.findByTestId("animated-heading").should("have.css", "opacity", "1")
  })

  it("references legal pages", () => {
    cy.findByTestId("footer-links")
      .findByText(/facebook/i)
      .should("have.attr", "href")

    cy.findByTestId("footer-links")
      .findByText(/instagram/i)
      .should("have.attr", "href")
  })

  it("renders other pages", () => {
    cy.findByTestId("footer-links")
      .findByText(/instagram/i)
      .click()
  })
})
