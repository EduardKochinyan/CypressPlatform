describe('Test Demoqa Automation practice form', () => {


    it('Test Practice form functionality', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#firstName').type('name');
        cy.get('#lastName').type('lastName');
        cy.get('#userEmail').type('email@example.com');
        cy.get('#gender-radio-1').click({ force: true });
        cy.get('#userNumber').type('01234567890');
        cy.get('#hobbies-checkbox-1').click({ force: true });
        cy.get('#currentAddress').type('Test');
        cy.get('#submit').click();
        cy.get('#closeLargeModal').click({ force: true });

    })

})