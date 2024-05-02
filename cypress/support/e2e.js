
import './commands'
beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com');
    cy.wait(3000);
})