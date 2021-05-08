import {API} from '../../src/url';

describe('Veeloomad games', () => {

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
        cy.get('.veeloomad').click()
        cy.get('.piltide-arvamine').click()

        cy.get('#mainInput').type('saarmas').should('have.value', 'saarmas')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('kobras').should('have.value', 'kobras')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('kiil').should('have.value', 'kiil')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('liuskur').should('have.value', 'liuskur')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('hüljes').should('have.value', 'hüljes')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('vaal').should('have.value', 'vaal')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('ujur').should('have.value', 'ujur')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('vesiämblik').should('have.value', 'vesiämblik')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('delfiin').should('have.value', 'delfiin')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()

        cy.get('#mainInput').type('vesihark').should('have.value', 'vesihark')
        cy.get('.pic-quiz-check').click()
        cy.get('.NextStep').click()
    })
    it('Test 1', () => {
        cy.get('.veeloomad').click()
        cy.get('.test').click()

        cy.get('.Answers > :nth-child(3)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(1)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(3)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(4)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(2)').click()
        cy.get('.NextStep').click()

        cy.get('.Answers > :nth-child(4)').click()
        cy.get('.NextStep').click()
        cy.get('.lead').click()
    });
});