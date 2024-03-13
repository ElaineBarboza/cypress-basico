describe("Cadastro de Usuários", () => {
    beforeEach(() => {
        cy.visit("https://www.automationexercise.com/");
    })
    it("Cadastro de Usuário Fixo", () => {
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.text', ' Home');
        cy.get('[href="/login"]').click();
        cy.get('.login-form').should('to.exist');
        cy.get('[data-qa="signup-name"]').type("Elaine")
    })
})

