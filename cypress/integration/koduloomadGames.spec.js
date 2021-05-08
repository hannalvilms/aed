import {API} from '../../src/url';

describe('Koduloomad games', () => {

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
        cy.get('.koduloomad').click()
        cy.get('.piltide-arvamine').click()

        cy.get('#mainInput').type('hobune').should('have.value', 'hobune')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('kass').should('have.value', 'kass')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('lammas').should('have.value', 'lammas')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('lehm').should('have.value', 'lehm')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('siga').should('have.value', 'siga')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('koer').should('have.value', 'koer')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('kits').should('have.value', 'kits')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('kana').should('have.value', 'kana')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('hani').should('have.value', 'hani')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('kalkun').should('have.value', 'kalkun')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('hamster').should('have.value', 'hamster')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('merisiga').should('have.value', 'merisiga')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('papagoi').should('have.value', 'papagoi')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('jänes').should('have.value', 'jänes')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('.lead').click()
    })
});