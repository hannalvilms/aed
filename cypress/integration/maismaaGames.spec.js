import {API} from "../../src/url";

describe('Maismaaloomad games', () => {

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
        cy.get('.maismaaloomad').click()
        cy.get('.piltide-arvamine').click()

        cy.get('#mainInput').type('jänes').should('have.value', 'jänes')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('orav').should('have.value', 'orav')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('metssiga').should('have.value', 'metssiga')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('kana').should('have.value', 'kana')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('hunt').should('have.value', 'hunt')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('kits').should('have.value', 'kits')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('siga').should('have.value', 'siga')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('rebane').should('have.value', 'rebane')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('kass').should('have.value', 'kass')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('mutt').should('have.value', 'mutt')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('merisiga').should('have.value', 'merisiga')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('mäger').should('have.value', 'mäger')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('põder').should('have.value', 'põder')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('metskits').should('have.value', 'metskits')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('siil').should('have.value', 'siil')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()
    })
});