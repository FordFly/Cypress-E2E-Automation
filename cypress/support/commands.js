Cypress.Commands.add('loginSauce', () => {
    cy.fixture('users').then((data) => {
        cy.get('#user-name').type(data.usuarioValido);
        cy.get('#password').type(data.passwordGeneral);
        cy.get('#login-button').click();
        cy.url().should('include', '/inventory.html');
    });
});