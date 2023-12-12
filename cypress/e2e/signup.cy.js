describe('SignUp Page', () => {
  it('Create user successfully', () => {
    cy.visit('http://localhost:5173/signup')
    cy.get('#name').type('Usuário Teste')
    cy.get('#email').type('user1@vitalino.com')
    cy.get('#password').type('123abc')
    cy.get('#confirmedPassword').type('123abc')
    cy.contains('Cadastrar').click()

    cy.get('.Toastify__toast-body').should(
      'contain',
      'Sua conta foi criada com sucesso!',
    )
  })
  it('Should return an error, as the password has no characters', () => {
    cy.visit('http://localhost:5173/signup')
    cy.get('#name').type('Usuário Teste')
    cy.get('#email').type('user@vitalino.com')
    cy.get('#password').type('123456')
    cy.get('#confirmedPassword').type('123456')
    cy.contains('Cadastrar').click()

    cy.get('.Toastify__toast-body').should(
      'contain',
      'A senha deve ter mais de 6 caracteres e conter letras e números.',
    )
  })
  it('Should return an error, as the password has no numbers', () => {
    cy.visit('http://localhost:5173/signup')
    cy.get('#name').type('Usuário Teste')
    cy.get('#email').type('user@vitalino.com')
    cy.get('#password').type('abcdef')
    cy.get('#confirmedPassword').type('abcdef')
    cy.contains('Cadastrar').click()

    cy.get('.Toastify__toast-body').should(
      'contain',
      'A senha deve ter mais de 6 caracteres e conter letras e números.',
    )
  })
  it('Should return an error, password and password confirmation are different', () => {
    cy.visit('http://localhost:5173/signup')
    cy.get('#name').type('Usuário Teste')
    cy.get('#email').type('user@vitalino.com')
    cy.get('#password').type('abcde1')
    cy.get('#confirmedPassword').type('abcdef1')
    cy.contains('Cadastrar').click()

    cy.get('.Toastify__toast-body').should(
      'contain',
      'As senhas devem ser iguais.',
    )
  })
  it('Should return an error, E-mail already registered', () => {
    cy.visit('http://localhost:5173/signup')
    cy.get('#name').type('Usuário Teste')
    cy.get('#email').type('user@vitalino.com')
    cy.get('#password').type('asd123')
    cy.get('#confirmedPassword').type('asd123')
    cy.contains('Cadastrar').click()
    cy.visit('http://localhost:5173/signup')
    cy.get('#name').type('Novo Usuário')
    cy.get('#email').type('user@vitalino.com')
    cy.get('#password').type('asd123')
    cy.get('#confirmedPassword').type('asd123')
    cy.contains('Cadastrar').click()
  })
})
