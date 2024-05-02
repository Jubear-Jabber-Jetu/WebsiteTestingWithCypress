///<reference types ="cypress"/>
describe('To veryfy user login is working properly', () => {
    it('Verify that user is able t0 login after entering username and password', () => {
        cy.get('[href="/login"]').click();
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();
        cy.get('#flash').should('exist');
    });
    it('Verify that user is able to logout after successful login', () => {
        cy.get('[href="/login"]').click();
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();
        cy.get('#flash').should('exist');
        cy.get('.icon-2x.icon-signout').click();
        cy.get('#flash').should('exist');
    });
    
});