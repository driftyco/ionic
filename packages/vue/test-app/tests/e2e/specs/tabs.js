describe('Tabs', () => {
  it('should go back from child pages', () => {
    cy.visit('http://localhost:8080/tabs')

    cy.get('#child-one').click();
    cy.ionPageHidden('tab1');
    cy.ionPageVisible('tab1childone');

    cy.get('#child-two').click();
    cy.ionPageHidden('tab1childone');
    cy.ionPageVisible('tab1childtwo');

    cy.ionBackClick('tab1childtwo');
    cy.ionBackClick('tab1childone');

    cy.ionPageVisible('tab1');
    cy.ionPageDoesNotExist('tab1childone');
    cy.ionPageDoesNotExist('tab1childtwo');
  });

  it('should go back to child page when switching tabs', () => {
    cy.visit('http://localhost:8080/tabs')

    cy.get('#child-one').click();

    cy.get('ion-tab-button#tab-button-tab2').click();
    cy.ionPageVisible('tab2');
    cy.ionPageHidden('tab1childone');

    cy.get('ion-tab-button#tab-button-tab1').click();

    cy.ionPageHidden('tab2');
    cy.ionPageHidden('tab1');
    cy.ionPageVisible('tab1childone');

    cy.get('ion-tab-button#tab-button-tab1').click();
  });

  it('should go to correct tab when going back via browser', () => {
    cy.visit('http://localhost:8080/tabs')

    cy.get('#child-one').click();

    cy.get('ion-tab-button#tab-button-tab2').click();
    cy.ionPageVisible('tab2');
    cy.ionPageHidden('tab1childone');

    cy.go('back');

    cy.ionPageVisible('tab1childone');
    cy.ionPageHidden('tab1');
  });

  it('should return to tab root when clicking tab button', () => {
    cy.visit('http://localhost:8080/tabs')

    cy.get('#child-one').click();
    cy.get('#child-two').click();

    cy.get('ion-tab-button#tab-button-tab1').click();

    cy.ionPageVisible('tab1');

    // TODO this page is not removed
    //cy.ionPageDoesNotExist('tab1childone');
    cy.ionPageDoesNotExist('tab1childtwo');
  })

  it('should be able to create and destroy tabs', () => {
    cy.visit('http://localhost:8080')

    cy.get('#tabs').click();
    cy.ionPageVisible('tab1');
    cy.ionPageHidden('home');

    cy.ionBackClick('tab1');
    cy.ionPageDoesNotExist('tabs');

    cy.get('#tabs').click();
    cy.ionPageVisible('tab1');
    cy.ionPageHidden('home');

    cy.ionBackClick('tab1');
    cy.ionPageDoesNotExist('tabs');
  });

  it('should go back from a tabs page to a non-tabs page using ion-back-button', () => {
    cy.visit('http://localhost:8080');

    cy.get('#tabs').click();
    cy.ionPageVisible('tab1');

    cy.get('ion-tab-button#tab-button-tab2').click();
    cy.ionPageVisible('tab2');

    cy.ionBackClick('tab2');
    cy.ionPageVisible('home')
    cy.ionPageDoesNotExist('tabs');
  });

  it('should properly clear stack when leaving tabs', () => {
    cy.visit('http://localhost:8080/');

    cy.get('#tabs').click();
    cy.ionPageVisible('tab1');

    cy.get('ion-tab-button#tab-button-tab2').click();
    cy.ionPageVisible('tab2');

    cy.ionBackClick('tab2');
    cy.ionPageVisible('home')
    cy.ionPageDoesNotExist('tabs');

    cy.get('#tabs').click();
    cy.ionPageVisible('tab1');

    cy.get('ion-tab-button#tab-button-tab2').click();
    cy.ionPageVisible('tab2');
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/22344
  it('should show tab 1 when redirecting from tab 3', () => {
    cy.visit('http://localhost:8080/tabs/tab3');

    cy.ionPageVisible('tab1');
    cy.ionPageDoesNotExist('tab3');
    cy.ionPageVisible('tabs');
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/22307
  it('should select correct tab after going back', () => {
    cy.visit('http://localhost:8080/tabs-secondary/tab1');

    cy.get('ion-tab-button#tab-button-tab2-secondary').click();
    cy.ionPageVisible('tab2-secondary');
    cy.ionPageHidden('tab1-secondary');

    cy.get('ion-tab-button#tab-button-tab3-secondary').click();
    cy.ionPageVisible('tab3-secondary');
    cy.ionPageHidden('tab2-secondary');

    cy.go('back');
    cy.ionPageVisible('tab2-secondary');
    cy.ionPageHidden('tab3-secondary');

    cy.go('back');
    cy.ionPageVisible('tab1-secondary');
    cy.ionPageHidden('tab2-secondary');

    cy.get('ion-tab-button#tab-button-tab3-secondary').click();
    cy.ionPageVisible('tab3-secondary');
    cy.ionPageHidden('tab1-secondary');
  });

  // Verifies 1 of 2 fixes for https://github.com/ionic-team/ionic-framework/issues/22519
  it('should show correct tab when switching between tabbed and non-tabbed contexts', () => {
    cy.visit('http://localhost:8080/routing');

    cy.get('[data-pageid="routing"] #tab1').click();
    cy.ionPageHidden('routing');
    cy.ionPageVisible('tab1');

    cy.get('ion-tab-button#tab-button-tab2').click();
    cy.ionPageHidden('tab1');
    cy.ionPageVisible('tab2');

    cy.get('[data-pageid="tab2"] #routing').click();
    cy.ionPageVisible('routing');
    cy.ionPageHidden('tabs');

    cy.get('[data-pageid="routing"] #tab1').click();
    cy.ionPageVisible('tab1');
    cy.ionPageHidden('routing');
    cy.ionPageHidden('tab2');
  });

  // Verifies 1 of 2 fixes for https://github.com/ionic-team/ionic-framework/issues/22519
  it('should not create a new tabs instance when switching between tabbed and non-tabbed contexts', () => {
    cy.visit('http://localhost:8080/tabs/tab1');

    cy.routerPush('/');
    cy.ionPageHidden('tabs');
    cy.ionPageVisible('home');

    cy.routerPush('/tabs/tab2');
    cy.ionPageHidden('tab1');

    cy.ionPageHidden('home');

    cy.ionPageVisible('tab2');
    cy.ionPageVisible('tabs');
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/22597
  it('should deselect old tab button when going to a tab that does not have a tab button', () => {
    cy.visit('http://localhost:8080/tabs/tab1');

    cy.get('ion-tab-button#tab-button-tab1').should('have.class', 'tab-selected');

    cy.routerPush('/tabs/tab4');
    cy.ionPageHidden('tab1');
    cy.ionPageVisible('tab4');

    cy.get('ion-tab-button#tab-button-tab1').should('not.have.class', 'tab-selected');
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/23101
  it('should return to previous tab instance when using the ion-back-button', () => {
    cy.visit('http://localhost:8080/tabs/tab1');

    cy.get('#tabs-secondary').click();
    cy.ionPageHidden('tabs');
    cy.ionPageVisible('tab1-secondary');

    cy.get('ion-tab-button#tab-button-tab2-secondary').click();
    cy.ionPageHidden('tab1-secondary');
    cy.ionPageVisible('tab2-secondary');

    cy.get('ion-tab-button#tab-button-tab1-secondary').click();
    cy.ionPageHidden('tab2-secondary');
    cy.ionPageVisible('tab1-secondary');

    cy.ionBackClick('tab1-secondary');
    cy.ionPageDoesNotExist('tabs-secondary');
    cy.ionPageVisible('tab1');
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/23087
  it('should return to correct view and url when going back from child page after switching tabs', () => {
    cy.visit('http://localhost:8080/tabs/tab1');

    cy.get('#child-one').click();
    cy.ionPageHidden('tab1');
    cy.ionPageVisible('tab1childone');

    cy.get('ion-tab-button#tab-button-tab2').click();
    cy.ionPageHidden('tab1childone');
    cy.ionPageVisible('tab2');

    cy.get('ion-tab-button#tab-button-tab1').click();
    cy.ionPageHidden('tab2');
    cy.ionPageVisible('tab1childone');

    cy.ionBackClick('tab1childone');
    cy.ionPageDoesNotExist('tab1childone');
    cy.ionPageVisible('tab1');

    cy.url().should('include', '/tabs/tab1');
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/22847
  it('should support dynamic tabs', () => {
    cy.visit('http://localhost:8080/tabs/tab1');

    cy.ionPageVisible('tab1');

    cy.get('ion-tab-button').its('length').should('equal', 3);
    cy.get('ion-tab-button#tab-button-tab1').should('have.class', 'tab-selected');

    cy.get('#add-tab').click();

    cy.get('ion-tab-button').its('length').should('equal', 4);

    cy.get('ion-tab-button#tab-button-tab4').click();
    cy.ionPageVisible('tab4');
    cy.ionPageHidden('tab1');

    cy.get('ion-tab-button#tab-button-tab1').should('not.have.class', 'tab-selected');
    cy.get('ion-tab-button#tab-button-tab4').should('have.class', 'tab-selected');
  });
})

describe('Tabs - Swipe to Go Back', () => {
  beforeEach(() => {
    cy.viewport(320, 568);
    cy.visit('http://localhost:8080?ionic:mode=ios');
    cy.get('#tabs').click();
    cy.ionPageHidden('home');
    cy.ionPageVisible('tab1')
  });

  // TODO: Flaky if test runner is slow
  // Delays between gesture movements
  // cause swipe back gesture to think
  // velocity is higher than it actually is
  /*it('should swipe and abort', () => {
    cy.ionSwipeToGoBack();
    cy.ionPageHidden('home');
    cy.ionPageVisible('tab1');
  });*/

  it('should swipe and go back to home', () => {
    cy.ionSwipeToGoBack(true);
    cy.ionPageVisible('home');

    // TODO: Vue router does not go back in cypress with router.back()
    //cy.ionPageDoesNotExist('tabs1');
  });

  it('should swipe and abort within a tab', () => {
    cy.get('#child-one').click();
    cy.ionPageVisible('tab1childone');
    cy.ionPageHidden('tab1');

    cy.ionSwipeToGoBack(false, 'ion-tabs#tabs ion-router-outlet');

    cy.ionPageHidden('tab1');
    cy.ionPageVisible('tab1childone');
  });

  it('should swipe and go back within a tab', () => {
    cy.get('#child-one').click();
    cy.ionPageVisible('tab1childone');
    cy.ionPageHidden('tab1');

    cy.ionSwipeToGoBack(true, 'ion-tabs#tabs ion-router-outlet');

    cy.ionPageVisible('tab1');
    cy.ionPageDoesNotExist('tab1childone');
  });

  it('should swipe and go back to correct tab after switching tabs', () => {
    cy.get('#child-one').click();
    cy.ionPageVisible('tab1childone');
    cy.ionPageHidden('tab1');

    cy.get('ion-tab-button#tab-button-tab2').click();
    cy.ionPageVisible('tab2');
    cy.ionPageHidden('tab1childone');

    cy.get('ion-tab-button#tab-button-tab1').click();
    cy.ionPageVisible('tab1childone');
    cy.ionPageHidden('tab2');

    cy.ionSwipeToGoBack(true, 'ion-tabs#tabs ion-router-outlet');

    cy.ionPageVisible('tab1');
    cy.ionPageDoesNotExist('tab1childone');

    cy.ionSwipeToGoBack(true, 'ion-tabs#tabs ion-router-outlet');
    cy.ionPageVisible('home');
  });
})

describe('Multi Tabs', () => {
  it('should navigate to multiple tabs instances', () => {
    cy.visit('http://localhost:8080/tabs')

    cy.get('#tabs-secondary').click();
    cy.ionPageHidden('tabs');
    cy.ionPageVisible('tabs-secondary');

    cy.get('[data-pageid="tab1-secondary"] #tabs-primary').click();
    cy.ionPageHidden('tabs-secondary');
    cy.ionPageVisible('tabs');

    cy.ionBackClick('tab1');
    cy.ionPageVisible('tabs-secondary');
    cy.ionPageDoesNotExist('tabs');

    cy.ionBackClick('tab1-secondary');
    cy.ionPageVisible('tabs');
    cy.ionPageDoesNotExist('tabs-secondary');

    cy.ionBackClick('tab1');

    cy.ionPageVisible('home');
    cy.ionPageDoesNotExist('tabs');
  });
})
