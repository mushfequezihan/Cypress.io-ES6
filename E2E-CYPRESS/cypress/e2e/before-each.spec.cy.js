// test case scenarios
describe('Text box with max characters', () => {

    //before each function/block to reduce our code executing before any testcase
    beforeEach(() => {

        // propery file change globally for url in "cypress.config.js"
        cy.visit('/example-3');

        //alias creation for data-cy selectors to reduce verbose code
        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charsLeftSpan');
        cy.get('[data-cy="input-last-name"]')
            .as('charInput');
    });

    //test case textbox 2 -label
    it('displays the appropriate remaining characters count', () => {

        //using alias for data-cy  
        cy.get('@charsLeftSpan')
            .then($charsLeftSpan => { // this "then" is not a es6-promise its an cypress then for results
                expect($charsLeftSpan.text()).to.equal('15'); // expect from chai library
            });

        cy.get('@charInput').type('hello');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10');

        cy.get('@charInput').type(' my friend');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0');
    });

    //test case textbox 2 - input
    it('prevents the user from typing more char once max is exceeded ', () => {

        //using alias
        cy.get('@charInput').type('hdlsidjdldjdkdjdl;djjdldjs;al');

        cy.get('@charInput')
            .should('have.attr', 'value', 'hdlsidjdldjdkdj');
    });
});