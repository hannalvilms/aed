import {API} from "../../src/url";

describe('Linnud games', () => {

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

    it('Heli arvamine', () => {
        cy.get('.linnud').click()
        cy.get('.heli-arvamine').click()

        cy.get('.Answers > :nth-child(6) > img').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(2) > img').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(4) > img').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(1) > img').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(7) > img').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(5) > img').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(1) > img').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(4) > img').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(7) > img').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(3) > img').click()
        cy.get('.NextStep').click()

        cy.get('.lead').click()

    })

    it('Piltide arvamine', () => {
        cy.get('.linnud').click()
        cy.get('.piltide-arvamine').click()

        cy.get('#mainInput').type('pääsuke').should('have.value', 'pääsuke')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('lõoke').should('have.value', 'lõoke')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('kuldnokk').should('have.value', 'kuldnokk')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('toonekurg').should('have.value', 'toonekurg')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('rasvatihane').should('have.value', 'rasvatihane')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('leevike').should('have.value', 'leevike')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('vares').should('have.value', 'vares')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('tuvi').should('have.value', 'tuvi')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('rähn').should('have.value', 'rähn')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('kajakas').should('have.value', 'kajakas')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('luik').should('have.value', 'luik')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('hani').should('have.value', 'hani')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('.lead').click()
    })
});