import {API} from '../../src/url';

describe('Login', () => {
    it('fill form', () => {
        cy.server({ force200: true });
        cy.visit('http://localhost:3000/login');
        cy.contains('Logi sisse');
        cy.get('.login-email')
            .type('proov@proov.com').should('have.value', 'proov@proov.com')

        cy.get('.login-pass')
            .type('proovproov').should('have.value', 'proovproov')

        cy.get('.login-button').click().request('POST', API + '/api/login', {
            email: 'proov@proov.com',
            password: 'proovproov',
        }).then(() => {
            cy.visit('http://localhost:3000/avaleht-logitud')
            cy.contains('Tere tulemast')
        })
    });
});


