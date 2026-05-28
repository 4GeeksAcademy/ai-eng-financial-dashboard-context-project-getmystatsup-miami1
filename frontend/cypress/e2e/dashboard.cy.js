describe('Dashboard E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the dashboard and displays key metrics', () => {
    cy.contains('Financial Overview').should('be.visible');
    cy.contains('Total Income').should('exist');
    cy.contains('Total Outcome').should('exist');
    cy.contains('Profit').should('exist');
    cy.contains('Profit Margin').should('exist');
  });

  it('has no detectable accessibility violations on load', () => {
    cy.checkA11y();
  });
});
