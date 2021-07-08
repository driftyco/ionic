const testController = (overlay, shadow = false) => {
  const selector = `.${overlay}-controller`;
  cy.get(`ion-radio#${overlay}`).click();
  cy.get('ion-radio#controller').click();

  cy.get('ion-button#present-overlay').click();
  cy.get(selector).should('exist').should('be.visible');

  if (shadow) {
    cy.get(selector).shadow().find('ion-backdrop').click({ force: true });
  } else {
    cy.get(`${selector} ion-backdrop`).click({ force: true });
  }

  cy.get(selector).should('not.exist');
}

const testComponent = (overlay, shadow = false) => {
  cy.get(`ion-radio#${overlay}`).click();
  cy.get('ion-radio#component').click();

  cy.get('ion-button#present-overlay').click();
  cy.get(overlay).should('exist').should('be.visible');

  if (shadow) {
    cy.get(overlay).shadow().find('ion-backdrop').click({ force: true });
  } else {
    cy.get(`${overlay} ion-backdrop`).click({ force: true });

    /**
     * Overlay components that are shadow can be used inline
     * so they should not be removed from the DOM. This test
     * might need to be revisited if other overlay components
     * are converted to shadow as well.
     */
    cy.get(overlay).should('not.exist');
  }
}

describe('Overlays', () => {
  beforeEach(() => {
    cy.viewport(1000, 900);
    cy.visit('http://localhost:8080/overlays')
  })

  it(`should open and close ion-alert via controller`, () => {
    testController('ion-alert');
  });

  it(`should open and close ion-action-sheet via controller`, () => {
    testController('ion-action-sheet');
  });

  it(`should open and close ion-loading via controller`, () => {
    testController('ion-loading');
  });

  it(`should open and close ion-modal via controller`, () => {
    testController('ion-modal', true);
  });

  it(`should open and close ion-popover via controller`, () => {
    testController('ion-popover', true);
  });

  it(`should open and close ion-toast via controller`, () => {
    cy.get(`ion-radio#ion-toast`).click();
    cy.get('ion-radio#controller').click();

    cy.get('ion-button#present-overlay').click();
    cy.get('ion-toast').should('exist');

    cy.get('ion-toast').shadow().find('button').click();

    cy.get('ion-toast').should('not.exist');
  });

  it(`should open and close ion-alert via component`, () => {
    testComponent('ion-alert');
  });

  it(`should open and close ion-action-sheet via component`, () => {
    testComponent('ion-action-sheet');
  });

  it(`should open and close ion-loading via component`, () => {
    testComponent('ion-loading');
  });

  it(`should open and close ion-modal via component`, () => {
    testComponent('ion-modal', true);
  });

  it(`should open and close ion-popover via component`, () => {
    testComponent('ion-popover', true);
  });

  it(`should open and close ion-toast via component`, () => {
    cy.get(`ion-radio#ion-toast`).click();
    cy.get('ion-radio#component').click();

    cy.get('ion-button#present-overlay').click();
    cy.get('ion-toast').should('exist');

    cy.get('ion-toast').shadow().find('button').click();

    cy.get('ion-toast').should('not.exist');
  });

  it('should pass props to modal via controller', () => {
    cy.get('ion-radio#ion-modal').click();
    cy.get('ion-radio#controller').click();

    cy.get('ion-button#present-overlay').click();
    cy.get('ion-modal').should('exist');

    cy.get('ion-modal ion-content').should('have.text', 'Custom Title');
  });

  it('should pass props to modal via component', () => {
    cy.get('ion-radio#ion-modal').click();
    cy.get('ion-radio#component').click();

    cy.get('ion-button#present-overlay').click();
    cy.get('ion-modal').should('exist');

    cy.get('ion-modal ion-content').should('have.text', 'Custom Title');
  });

  it('should pass props to popover via controller', () => {
    cy.get('ion-radio#ion-popover').click();
    cy.get('ion-radio#controller').click();

    cy.get('ion-button#present-overlay').click();
    cy.get('ion-popover.ion-popover-controller').should('exist');

    cy.get('ion-popover.ion-popover-controller ion-content').should('have.text', 'Custom Title');
  });

  it('should pass props to popover via component', () => {
    cy.get('ion-radio#ion-popover').click();
    cy.get('ion-radio#component').click();

    cy.get('ion-button#present-overlay').click();
    cy.get('ion-popover').should('exist');

    cy.get('ion-popover.popover-inline ion-content').should('have.text', 'Custom Title');
  });

  it('should only open one instance at a time when props change quickly on component', () => {
    cy.get('#change-loading-props').click();

    cy.get('ion-loading').should('have.length', 1);
  });

  it('should fire lifecycle events on overlays', () => {
    cy.get('ion-radio#ion-modal').click();
    cy.get('ion-radio#component').click();

    cy.get('ion-button#present-overlay').click();
    cy.get('ion-modal').should('exist');

    testLifecycle('overlays', {
      willPresent: 1,
      didPresent: 1,
      willDismiss: 0,
      didDismiss: 0
    });

    cy.get('ion-modal #dismiss').click();

    testLifecycle('overlays', {
      willPresent: 1,
      didPresent: 1,
      willDismiss: 1,
      didDismiss: 1
    });

    cy.get('ion-button#present-overlay').click();
    cy.get('ion-modal').should('exist');

    testLifecycle('overlays', {
      willPresent: 2,
      didPresent: 2,
      willDismiss: 1,
      didDismiss: 1
    });

    cy.get('ion-modal #dismiss').click();

    testLifecycle('overlays', {
      willPresent: 2,
      didPresent: 2,
      willDismiss: 2,
      didDismiss: 2
    });
  });
})

const testLifecycle = (selector, expected = {}) => {
  cy.get(`[data-pageid=${selector}] #willPresent`).should('have.text', expected.willPresent);
  cy.get(`[data-pageid=${selector}] #didPresent`).should('have.text', expected.didPresent);
  cy.get(`[data-pageid=${selector}] #willDismiss`).should('have.text', expected.willDismiss);
  cy.get(`[data-pageid=${selector}] #didDismiss`).should('have.text', expected.didDismiss);
}

