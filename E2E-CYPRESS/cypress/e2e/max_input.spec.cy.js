describe('Text box with max characters', () => {

    //textbox 1
    it('displays the appropriate remaining characters count', () => {
        cy.visit('http://localhost:3000/example-2')

        //using span tag is not recommended
        cy.get('span')
            .invoke('text')
            .should('equal', '15');

        cy.get('input').type('hello');

        cy.get('span')
            .invoke('text')
            .should('equal', '10');

        cy.get('input').type(' my friend');

        cy.get('span')
            .invoke('text')
            .should('equal', '0');
    });

    //textbox 1
    it('prevents the user from typing more char once max is exceeded ', () => {
        cy.visit('http://localhost:3000/example-2')

        cy.get('input').type('hdlsidjdldjdkdjdl;djjdldjs;al');

        cy.get('input')
            .should('have.attr', 'value', 'hdlsidjdldjdkdj');
    });
});