describe('Página de Login', () => {
  it('Should login successfully', () => {
    cy.visit('http://localhost:5173/login')
    // cy.wait(1500)
    cy.get('#email').type('elias@email.com')
    // cy.wait(1500)
    cy.get('#password').type('elias123')
    // cy.wait(1500)
    cy.contains('Entrar').click()
    // cy.wait(3000)
  })
})
