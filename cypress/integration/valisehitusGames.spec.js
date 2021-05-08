import {API} from "../../src/url";

describe('Välisehitus games', () => {

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

    it('Piltide arvamine', () => {
        cy.get('.valisehitus').click()
        cy.get('.piltide-arvamine').click()

        cy.get('#mainInput').type('kere').should('have.value', 'kere')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('jäsemed').should('have.value', 'jäsemed')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('pea').should('have.value', 'pea')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('kael').should('have.value', 'kael')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('saba').should('have.value', 'saba')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()
    })
    it('Test', () => {
        cy.get('.valisehitus').click()
        cy.get('.test').click()

        cy.get('.Answers > :nth-child(3)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(2)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(1)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(4)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(3)').click()
        cy.get('.NextStep').click()

    });
});
