describe('Página de Login', () => {
  it('Clicar em detalhes de usuário, clicar em entrar, inserir email e senha', () => {
    cy.visit('http://127.0.0.1:5173/')
    // cy.wait(1500)
    cy.get('#email').type('ricardo')
    // cy.wait(1500)
    cy.get('#password').type('123')
    // cy.wait(1500)
    cy.contains('Cadastrar').click()
    // cy.wait(3000)

    cy.get('#email').type('@vitalino.com')
    // cy.wait(1500)
    cy.contains('Cadastrar').click()
  })
})
