describe('Página de Perfil', () => {
  it('Inserir CEP, rua, número, complemento, bairro, cidade, uf, telefone e clicar em salvar', () => {
    cy.visit('http://127.0.0.1:5173/signup')
    cy.get('#name').type('Ricardo Junior')
    // cy.wait(1500)
    cy.get('#email').type('ricardo@vitalino.com')
    // cy.wait(1500)
    cy.get('#password').type('123')
    // cy.wait(1500)
    cy.get('#confirmedPassword').type('123')
    // cy.wait(1500)
    cy.contains('Cadastrar').click()
  })
})
