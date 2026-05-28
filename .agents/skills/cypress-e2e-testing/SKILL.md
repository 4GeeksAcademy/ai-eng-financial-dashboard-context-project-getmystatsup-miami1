---
name: cypress-e2e-testing
description: Automates Cypress E2E and accessibility testing setup for React/TypeScript projects. Scaffolds Cypress config, example tests, and integrates cypress-axe for a11y checks.
---

# Cypress E2E Testing Skill

This skill sets up Cypress for end-to-end (E2E) testing, including accessibility checks with cypress-axe.

## What it does
- Installs Cypress and cypress-axe
- Creates Cypress config and support files
- Adds example E2E and accessibility test for the dashboard
- Adds npm scripts for running and opening Cypress

## Usage
1. **Install dependencies:**
   - `npm install --save-dev cypress cypress-axe`
2. **Scaffold Cypress files:**
   - `cypress.config.js` in your frontend folder
   - `cypress/support/e2e.js` with cypress-axe integration
   - Example test: `cypress/e2e/dashboard.cy.js`
3. **Add scripts to package.json:**
   - `cy:open` and `cy:run` for Cypress UI and headless runs
4. **Run tests:**
   - `npm run cy:open` or `npm run cy:run`

## Example Test
```js
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
```

## Best Practices
- Add more tests for user flows and edge cases
- Integrate with CI for automated E2E checks
- Use `cy.injectAxe()` and `cy.checkA11y()` for accessibility on every page
