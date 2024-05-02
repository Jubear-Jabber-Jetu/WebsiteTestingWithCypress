///<reference types ="cypress"/>
describe('Verify the dropdown page is working properly',()=>{
    it('Verify that the dropdown is available for users',()=>{
        cy.get(':nth-child(11) > a').click();
        cy.get('#dropdown').should('exist');
    });
    it('Verify that user is able to select the dropdown',()=>{
        cy.get(':nth-child(11) > a').click();
        cy.get('#dropdown').select(2);
    });
});