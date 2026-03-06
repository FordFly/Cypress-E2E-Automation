describe('Suite de pruebas: Login SauceDemo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })
    it('TC-001: Login exitoso con credenciales válidas', () => {
        
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');

        cy.get('#login-button').click();

        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('have.text', 'Products');
    });

    it('TC-002: Login fallido con credenciales inválidas', () => {

        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('Hacker1234');

        cy.get('#login-button').click();

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Epic sadface: Username and password do not match');
    });

    it('TC-003: Login usando datos de un archivo JSON', () => {
        cy.fixture('users').then((data) => {
            cy.get('#user-name').type(data.usuarioValido);
            cy.get('#password').type(data.passwordGeneral);

            cy.get('#login-button').click();

            cy.url().should('include', '/inventory.html');
        });
    });

    it('TC-004: Añadir un producto al carrito', () => {
        cy.loginSauce();

            cy.get('#add-to-cart-sauce-labs-backpack').click();
            cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');

    });


    it('TC-005: Completar el proceso de compra', () => {
        cy.loginSauce();

            cy.get('#add-to-cart-sauce-labs-backpack').click();
            cy.get('.shopping_cart_link').click();

            cy.get('#checkout').click();
            cy.get('#first-name').type('Shawn');
            cy.get('#last-name').type('Frost');
            cy.get('#postal-code').type('28282');

            cy.get('#continue').click();
            cy.get('#finish').click();

            cy.get('.complete-header').should('have.text', 'Thank you for your order!');
        
    });
});