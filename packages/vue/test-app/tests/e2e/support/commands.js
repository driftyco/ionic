// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('ionSwipeToGoBack', (complete = false, selector = 'ion-router-outlet') => {
  const increment = (complete) ? 60 : 5;
  cy.get(selector)
    .first()
    .trigger('mousedown', 0, 275, { which: 1, force: true })
    .trigger('mousemove', increment * 1, 275, { which: 1, force: true })
    .wait(25)
    .trigger('mousemove', increment * 2, 275, { which: 1, force: true })
    .wait(25)
    .trigger('mousemove', increment * 3, 275, { which: 1, force: true })
    .wait(25)
    .trigger('mousemove', (complete) ? increment * 4 : increment * 0, 275, { which: 1, force: true })
    .trigger('mouseup', (complete) ? increment * 4 : increment * 0, 275, { which: 1, force: true })
  cy.wait(150);
})

Cypress.Commands.add('ionPageVisible', (pageId) => {
  cy.get(`.ion-page[data-pageid=${pageId}]`)
    .should('not.have.class', 'ion-page-hidden')
    .should('not.have.class', 'ion-page-invisible')
    .should('have.length', 1)
})

Cypress.Commands.add('ionPageHidden', (pageId) => {
  cy.get(`div.ion-page[data-pageid=${pageId}]`)
    .should('have.class', 'ion-page-hidden')
})

Cypress.Commands.add('ionBackClick', (pageId) => {
  cy.get(`div.ion-page[data-pageid=${pageId}]`)
    .should('be.visible', true)
    .find('ion-back-button')
    .click()
});

Cypress.Commands.add('ionPageDoesNotExist', (pageId) => {
  cy.get(`div.ion-page[data-pageid=${pageId}]`)
    .should('not.exist')
});

Cypress.Commands.add('routerPush', (path) => {
  cy.window().then(win => {
    win.debugRouter.push(path);
  });
});

Cypress.Commands.add('routerReplace', (path) => {
  cy.window().then(win => {
    win.debugRouter.replace(path);
  });
});

Cypress.Commands.add('ionBackButtonHidden', (pageId) => {
  cy.get(`div.ion-page[data-pageid=${pageId}]`)
    .should('be.visible', true)
    .find('ion-back-button')
    .should('not.be.visible')
});
