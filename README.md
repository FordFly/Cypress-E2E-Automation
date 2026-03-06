# Portfolio de Automatización E2E con Cypress

Este repositorio contiene una colección de proyectos de **Automatización de Pruebas End-to-End (E2E)**. El objetivo es demostrar la evolución en el uso de Cypress, desde la interacción con elementos complejos en la interfaz hasta la creación de flujos de compra completos utilizando buenas prácticas de programación y arquitectura de pruebas.

## Proyectos Incluidos

### 1. E-Commerce Checkout Flow | [SauceDemo](https://www.saucedemo.com/)
Automatización completa de una tienda online, simulando el comportamiento real de un usuario desde el inicio de sesión hasta la confirmación de compra.
* **Data-Driven Testing (DDT):** Uso de archivos `fixtures` (.json) para separar los datos de prueba de la lógica del código, permitiendo iterar con diferentes usuarios.
* **Custom Commands:** Creación de comandos personalizados (ej. `cy.loginSauce()`) para encapsular lógica repetitiva, facilitando el mantenimiento y aplicando el principio DRY (Don't Repeat Yourself).
* **E2E Testing:** Navegación y aserciones a través de múltiples pantallas (Login, Inventario, Carrito, Formulario de envío y Checkout).

### 2. Formularios y UI Compleja | [DemoQA](https://demoqa.com/automation-practice-form)
Automatización de un flujo de registro lidiando con elementos web de difícil interacción.
* **Manejo avanzado de Localizadores y Bypass de UI:** Interacción con *Radio Buttons* y *Checkboxes* ocultos mediante CSS (`{ force: true }`).
* **Menús Dinámicos:** Manejo de componentes *React-Select* simulando eventos de teclado en tiempo real (`{enter}`).
* **Aserciones (Assertions):** Validación del resultado esperado comprobando la visibilidad del modal de confirmación en el DOM (`.should('be.visible')`).

## Tecnologías utilizadas
* **Framework de Pruebas:** Cypress
* **Lenguaje:** JavaScript
* **Entorno:** Node.js
* **Editor:** Visual Studio Code

## Cómo ejecutar las pruebas localmente

Si deseas clonar este repositorio y ejecutar las pruebas en tu máquina, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/FordFly/Cypress-E2E-Automation.git](https://github.com/FordFly/Cypress-E2E-Automation.git)
Instala las dependencias necesarias:
npm install

Abre la interfaz de Cypress:
npx cypress open

## Fragmento de código destacado
Demostración del uso de Custom Commands y Data-Driven Testing en el proyecto de SauceDemo para mantener el código limpio y escalable:

```javascript
// En cypress/support/commands.js
Cypress.Commands.add('loginSauce', () => {
    cy.visit('[https://www.saucedemo.com/](https://www.saucedemo.com/)');
    cy.fixture('users').then((data) => {
        cy.get('#user-name').type(data.usuarioValido);
        cy.get('#password').type(data.passwordGeneral);
        cy.get('#login-button').click();
    });
});

// En cypress/e2e/saucedemo-login.cy.js
it('TC-004: Añadir un producto al carrito', () => {
    cy.loginSauce(); // Uso del comando personalizado
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
});
