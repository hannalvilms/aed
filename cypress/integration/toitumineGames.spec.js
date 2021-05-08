import {API} from "../../src/url";

describe('Toitumine ja kasvamine games', () => {

    beforeEach(() => {
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
    })

    it('Test', () => {
        cy.get('.toitumine').click()
        cy.get('.test').click()

        cy.get('.Answers > :nth-child(2)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(1)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(3)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(1)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(1)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(2)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(2)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(3)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(1)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(3)').click()
        cy.get('.NextStep').click()

    });
});