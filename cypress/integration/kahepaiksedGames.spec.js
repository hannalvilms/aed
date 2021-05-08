import {API} from "../../src/url";

describe('Maod, sisalik, kahepaiksed games', () => {

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
        cy.get('.kahepaiksed').click()
        cy.get('.piltide-arvamine').click()

        cy.get('#mainInput').type('nastik').should('have.value', 'nastik')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('rästik').should('have.value', 'rästik')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('vaskuss').should('have.value', 'vaskuss')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('kärnkonn').should('have.value', 'kärnkonn')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('konn').should('have.value', 'konn')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('sisalik').should('have.value', 'sisalik')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()
    })
    it('Test 1', () => {
        cy.get('.kahepaiksed').click()
        cy.get('.test').click()

        cy.get('.Answers > :nth-child(4)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(1)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(3)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(2)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(1)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(2)').click()
        cy.get('.NextStep').click()
        cy.get('.lead').click()
    });

    it('Test 2', () => {
        cy.get('.kahepaiksed').click()
        cy.get('.test-two').click()

        cy.get('.Answers > :nth-child(2)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(2)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(4)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(2)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(4)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(1)').click()
        cy.get('.NextStep').click()
        cy.get('.lead').click()
    });
});