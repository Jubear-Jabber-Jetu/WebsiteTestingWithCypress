///<reference types ="cypress"/>
describe('To verify the test cases of download page', () => {
    it('To veryfy user is able to click on download link', () => {
        cy.get('[href="/download"]').click();
        cy.get('[href="download/some-file.txt"]').click();
    });

    it('To verify the downloadable link is present', () => {
        cy.get('[href="/download"]').click();
        cy.get('[href="download/auth_mutiple_octane.zip"]').should('exist')
    });
});