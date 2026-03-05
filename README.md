# Automatización E2E con Cypress | DemoQA

Este repositorio contiene un proyecto de demostración de **Automatización de Pruebas End-to-End (E2E)**. El objetivo es automatizar el flujo completo de registro de un usuario utilizando el entorno de pruebas de [DemoQA](https://demoqa.com/automation-practice-form), validando tanto la interacción con elementos complejos de la interfaz como el resultado final esperado.

## Tecnologías utilizadas

* **Framework de Pruebas:** Cypress
* **Lenguaje:** JavaScript
* **Entorno:** Node.js
* **Editor:** Visual Studio Code

## Habilidades técnicas demostradas

Durante el desarrollo de este script, se han implementado las siguientes técnicas de automatización:

* **Manejo avanzado de Localizadores:** Uso de selectores CSS específicos (`#id`) para identificar elementos únicos en el DOM.
* **Interacción con UI Compleja:** * Escritura en campos de texto estándar (`.type()`).
  * Interacción con *Radio Buttons* y *Checkboxes* ocultos o customizados mediante CSS, utilizando técnicas de bypass de UI (`{ force: true }`).
  * Manejo de menús desplegables dinámicos (componentes *React-Select*) simulando eventos de teclado en tiempo real (`{enter}`).
* **Aserciones (Assertions):** Validación del resultado esperado comprobando la visibilidad del modal de confirmación en el DOM (`.should('be.visible')`), asegurando la fiabilidad de la prueba.

## Cómo ejecutar las pruebas localmente

Si deseas clonar este repositorio y ejecutar las pruebas en tu máquina, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/FordFly/Cypress-E2E-Automation.git](https://github.com/FordFly/Cypress-E2E-Automation.git)
Instala las dependencias necesarias:

Bash
npm install
Abre la interfaz de Cypress:

Bash
npx cypress open
💻 Fragmento de Código Destacado
JavaScript
describe('Suite de Pruebas: Formulario DemoQA', () => {
    it('TC-001: Abrir la página y validar que carga', () => {
        cy.visit('[https://demoqa.com/automation-practice-form](https://demoqa.com/automation-practice-form)');

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
