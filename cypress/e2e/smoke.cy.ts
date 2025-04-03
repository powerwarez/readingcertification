describe('smoke tests', () => {
  it('should load the home page', () => {
    cy.visit('/');
    cy.get('h1').should('exist');
  });
}); 