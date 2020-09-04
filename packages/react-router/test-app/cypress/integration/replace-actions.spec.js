const port = 3000;

describe('Replace Action', () => {

  /*
    This spec tests that when a 'replace' action is used, that it does replace the current
    history item in location history.
  */

  it('/replace-action > Goto Page2 > Goto Page3 > Browser Back > Page1 should be visible and Page2 should be gone', () => {
    cy.visit(`http://localhost:${port}/replace-action`)
    cy.ionPageVisible('page1')
    cy.ionNav('ion-button', 'Goto Page2')
    cy.ionPageVisible('page2')
    cy.ionNav('ion-button', 'Replace Page3')
    cy.ionPageVisible('page3')
    cy.go('back')
    cy.ionPageVisible('page1')
    cy.ionPageDoesNotExist('page2')
  })



})
