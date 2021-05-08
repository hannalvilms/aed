import {API} from '../../src/url';

describe('Kalad games', () => {

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
        cy.get('.kalad').click()
        cy.get('.piltide-arvamine').click()

        cy.get('#mainInput').type('ahven').should('have.value', 'ahven')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('angerjas').should('have.value', 'angerjas')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('lõhe').should('have.value', 'lõhe')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('räim').should('have.value', 'räim')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('latikas').should('have.value', 'latikas')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('lest').should('have.value', 'lest')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('haug').should('have.value', 'haug')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()
    })
    it('Test 1', () => {
        cy.get('.kalad').click()
        cy.get('.test').click()

        cy.get('.Answers > :nth-child(2)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(4)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(2)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(1)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(2)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(4)').click()
        cy.get('.NextStep').click()
        cy.get('.lead').click()
    });
});