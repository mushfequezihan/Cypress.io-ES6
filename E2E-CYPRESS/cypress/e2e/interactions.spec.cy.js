// activating code completion per script for cypress --> /// <reference types="Cypress" />

//env variable to access from project or local terminal
//env variable from "cypress.env.json" or "cypress.config.js" file as priority
alert(Cypress.env('MY_ENV_VAR')); //alert for display


//basic page interactions scenarios
describe('Basic page interactions', () => {

    //before any test action
    beforeEach(() => {
        cy.visit("/example-4");
    });

    //test case 1 for double click
    it('sets the header text to the items name when double clicked', () => {

        //data-cy value is coming from actual app code
        cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
            .dblclick();

        cy.get('[data-cy=box-1-selected-name]')
            .invoke('text')
            .should('equal', 'Option Two');
    });

    //test case 2 for selected checkboxes
    it('displays the correct count for the number of selected checkboxes', () => {

        //data-cy value is coming from actual app code
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
            .check();

        cy.get('[data-cy=box-2-selected-count]')
            .invoke('text')
            .should('equal', '1');
    });

    //test case 3 for selected item from the list
    it('displays the name of the current selected item', () => {

        //data-cy value is coming from actual app code 
        cy.get('[data-cy=box-3-dropdown]')
            .select('Option Three');

        cy.get('[data-cy=box-3-selected-name]')
            .invoke('text')
            .should('equal', 'Option Three');
    });

    //test case 4 for trigger - mouse movement
    it('it should display of the name of the most recently hovered item', () => {

        //data-cy value is coming from actual app code 
        cy.get('[data-cy=box-4-items-list] > :nth-child(2)')
            .trigger('mouseover')
            .debug();  // to open debugger tool in web console

        //to check to see equal value selected
        cy.get('[data-cy=box-4-selected-name]')
            .invoke('text')
            .should('equal', 'Option Two');
    });
});