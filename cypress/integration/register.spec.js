describe('Register', () => {
    it('can go to register page', () => {
        cy.visit('http://localhost:3000/registreeri');
        cy.contains('Loo konto');
    });

    it('fill form', () => {
        cy.contains('Loo konto');
        cy.get('.register-email')
            .type('fake@email.com').should('have.value', 'fake@email.com')

        cy.get('.register-name')
            .type('Eesnimi Perenimi').should('have.value', 'Eesnimi Perenimi')

        cy.get('.register-pass')
            .type('parool123').should('have.value', 'parool123')

        cy.get('.register-pass-check')
            .type('parool123').should('have.value', 'parool123')

        cy.get('.form-check-input').click()
        cy.get('.register-submit').click()
    });
});