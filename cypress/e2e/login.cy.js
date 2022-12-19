describe('login dan register', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  it('passes', () => {
    cy.visit('http://localhost/Hospital-Management-System/')

    cy.contains('.dropdown-item','SignUp')
    .and('have.text','SignUp as Doctor')
    .click({force: true})
  })
})