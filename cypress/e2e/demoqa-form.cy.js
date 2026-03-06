describe('Suite de Pruebas: Formulario DemoQA', () => {
  it('TC-001: Abrir la página y validar que carga', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('#firstName').type('Shawn');
    cy.get('#lastName').type('Frost');
    cy.get('#userNumber').type('1234567890');
    cy.get('#userEmail').type("Shawnfrost@gmail.com")

    cy.get('#gender-radio-1').check({force: true});
    cy.get('#subjectsInput').type('Maths{enter}');
    cy.get('#hobbies-checkbox-1').check({force:true});
    cy.get('#react-select-3-input').type('NCR{enter}');
    cy.get('#react-select-4-input').type('Delhi{enter}');

    cy.get('#submit').click({force:true});

    cy.contains('Thanks for submitting the form').should('be.visible');
  });
});