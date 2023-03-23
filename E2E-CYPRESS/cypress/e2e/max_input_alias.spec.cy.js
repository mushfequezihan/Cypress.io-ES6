describe('Text box with max characters', () => {
    it('displays the appropriate remaining characters count', () => {
        cy.visit('http://localhost:3000/example-3')

        //alias creation for data-cy selectors to reduce verbose code
        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charsLeftSpan');
        cy.get('[data-cy="input-last-name"]')
            .as('charInput');

        //using alias for data-cy  
        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '15');

        cy.get('@charInput').type('hello');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10');

        cy.get('@charInput').type(' my friend');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0');
    });

    it('prevents the user from typing more char once max is exceeded ', () => {
        cy.visit('http://localhost:3000/example-3')

        //alias creation for data-cy selectors to reduce verbose code
        cy.get('[data-cy="input-last-name"]')
            .as('charInput');

        cy.get('@charInput').type('hdlsidjdldjdkdjdl;djjdldjs;al');

        cy.get('@charInput')
            .should('have.attr', 'value', 'hdlsidjdldjdkdj');
    });
});