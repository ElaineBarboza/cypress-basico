describe(`Èxercício de automação`,() => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/')
    cy.log(emailAleatorio)
})
it.only('Acessar usuário', () => {
  const emailAleatorio = faker.internet.email();
  const senhaAleatoria = faker.internet.password();
  cy.log('devo acessar com um usuário válido')
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  cy.get('.signup-form > h2').should('be.visible')
  cy.get('[data-qa="login-button"]').should('be.visible')
  cy.get('[data-qa="login-email"]').type()
  cy.get('[data-qa="login-password"]').type(12faker.internet.password())
  cy.get('[data-qa="login-button"]').click()
  cy.get('.shop-menu > .nav > :nth-child(5)').click()
  cy.get('b').should('be.visible')
})
