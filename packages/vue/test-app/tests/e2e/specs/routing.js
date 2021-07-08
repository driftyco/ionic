describe('Routing', () => {
  it('should go to sibling page', () => {
    cy.visit('http://localhost:8080');
    cy.get('ion-item#routing').click();

    cy.wait(500)

    cy.ionPageVisible('routing')
    cy.ionPageHidden('home')
  });

  it('should set query params and keep view in stack', () => {
    cy.visit('http://localhost:8080/routing');
    cy.get('#route-params').click();
    cy.ionPageVisible('routing');
  });

  it('should go back home', () => {
    cy.visit('http://localhost:8080');
    cy.get('ion-item#routing').click();

    cy.ionBackClick('routing');

    cy.ionPageVisible('home');
    cy.ionPageDoesNotExist('routing');
  });

  it('should go back home with default href', () => {
    cy.visit('http://localhost:8080/default-href');

    cy.ionBackClick('defaulthref');

    cy.ionPageVisible('home');
    cy.ionPageDoesNotExist('defaulthref');
  });

  it('should show back button', () => {
    cy.visit('http://localhost:8080');

    cy.get('#routing').click();
    cy.get('#child').click();

    cy.ionBackClick('routingchild');
    cy.ionBackClick('routing');

    cy.ionPageVisible('home');
    cy.ionPageDoesNotExist('routing');
    cy.ionPageDoesNotExist('routingchild')
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/22359
  it('should navigate to multiple pages that match the same parameterized route', () => {
    cy.visit('http://localhost:8080/routing');

    cy.get('#parameter-abc').click();
    cy.ionPageVisible('routingparameter-abc');
    cy.get('[data-pageid=routingparameter-abc] #parameter-value').should('have.text', 'abc');
    cy.ionBackClick('routingparameter-abc');

    cy.ionPageDoesNotExist('routingparameter-abc');

    cy.get('#parameter-xyz').click();
    cy.ionPageVisible('routingparameter-xyz');
    cy.get('[data-pageid=routingparameter-xyz] #parameter-value').should('have.text', 'xyz');
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/22359
  it('should handle parameterized urls properly', () => {
    cy.visit('http://localhost:8080/routing');

    cy.get('#parameter-abc').click();
    cy.ionPageVisible('routingparameter-abc');

    cy.get('#parameter-view').click();

    cy.ionPageVisible('routingparameterview');
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/22324
  it('should show correct view when navigating back from parameterized page to query string page', () => {
    cy.visit('http://localhost:8080/routing');
    cy.get('#route-params').click();
    cy.get('#parameter-view-item').click();

    cy.ionPageVisible('routingparameterview');
    cy.ionPageHidden('routing');

    cy.ionBackClick('routingparameterview');

    cy.ionPageDoesNotExist('routingparameterview');
    cy.ionPageVisible('routing');
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/22359
  it('should work properly with async navigation guards', () => {
    cy.visit('http://localhost:8080');
    cy.get('#delayed-redirect').click();

    cy.get('ion-loading').should('exist');

    cy.ionPageVisible('routing');
    cy.ionPageHidden('home');

    cy.ionBackClick('routing');

    cy.ionPageVisible('home');
    cy.ionPageDoesNotExist('routing');
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/22412
  it('should correctly replace route in a component', () => {
    cy.visit('http://localhost:8080/routing?ionic:mode=ios');

    cy.get('#replace').click();

    cy.ionPageVisible('navigation');
    cy.ionPageDoesNotExist('routing');

    cy.ionSwipeToGoBack(true);
    cy.ionPageVisible('navigation');
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/22654
  it('should show correct view when navigating between parameter urls', () => {
    cy.visit('http://localhost:8080/nested');

    cy.ionPageVisible('nestedchild');

    cy.get('[data-pageid="routeroutlet"] #trash').click();
    cy.ionPageVisible('folder');

    cy.get('[data-pageid="routeroutlet"] #outbox').click();
    cy.ionPageVisible('folder');

    cy.get('[data-pageid="routeroutlet"] #other').click();
    cy.ionPageVisible('nestedchildtwo');
    cy.ionPageDoesNotExist('folder');

    cy.get('[data-pageid="routeroutlet"] #spam').click();
    cy.ionPageVisible('folder');
    cy.ionPageDoesNotExist('nestedchildtwo');

    cy.get('[data-pageid="routeroutlet"] #outbox').click();
    cy.ionPageVisible('folder');

    cy.get('[data-pageid="routeroutlet"] #other').click();
    cy.ionPageVisible('nestedchildtwo');
    cy.ionPageDoesNotExist('folder');
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/22658
  it('should select correct leaving view when navigating between parameter urls', () => {
    cy.visit('http://localhost:8080');

    cy.routerPush('/routing/123');
    cy.ionPageVisible('routingparameter-123');
    cy.ionPageHidden('home');

    cy.routerPush('/routing/456');
    cy.ionPageVisible('routingparameter-456');
    cy.ionPageHidden('home');

    cy.routerPush('/navigation');
    cy.ionPageVisible('navigation');
    cy.ionPageHidden('routingparameter-456');

    cy.routerPush('/routing/789');
    cy.ionPageVisible('routingparameter-789');
    cy.ionPageHidden('home');

    cy.routerPush('/routing/000');
    cy.ionPageVisible('routingparameter-000');
    cy.ionPageHidden('home');

    cy.routerPush('/navigation');
    cy.ionPageVisible('navigation');
    cy.ionPageHidden('routingparameter-000');
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/22528
  it('should not show ion-back-button when replacing to root page', () => {
    cy.visit('http://localhost:8080');

    cy.routerPush('/navigation');
    cy.ionPageVisible('navigation');
    cy.ionPageHidden('home');

    cy.routerReplace('/');
    cy.ionPageDoesNotExist('navigation');
    cy.ionPageVisible('home');

    cy.ionBackButtonHidden('home');
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/22662
  it('should push a new instance of a parameterized page so there is a transition', () => {
    cy.visit('http://localhost:8080');

    cy.routerPush('/routing/123');
    cy.ionPageVisible('routingparameter-123');
    cy.ionPageHidden('home');

    cy.routerPush('/routing/456');
    cy.ionPageVisible('routingparameter-456');
    cy.ionPageHidden('routingparameter-123');

    cy.ionBackClick('routingparameter-456');

    cy.ionPageVisible('routingparameter-123')
    cy.ionPageDoesNotExist('routingparameter-456');
  })
});

describe('Routing - Swipe to Go Back', () => {
  beforeEach(() => {
    cy.viewport(320, 568);
    cy.visit('http://localhost:8080?ionic:mode=ios');
    cy.get('#routing').click();
    cy.ionPageHidden('home');
    cy.ionPageVisible('routing')
  });

  it('should swipe and abort', () => {
    cy.ionSwipeToGoBack();
    cy.ionPageHidden('home');
    cy.ionPageVisible('routing');
  });

  it('should swipe and complete', () => {
    cy.ionSwipeToGoBack(true);
    cy.ionPageVisible('home');

    // TODO: Vue router does not go back in cypress with router.back()
    //cy.ionPageDoesNotExist('navigation');
  });
})
