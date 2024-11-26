// TODO:
// 1. test search bar exist on the page, and sends the correct payload to api
// 2. stub api with different status codes, and test loading, success, and error states
// 3. test search sanitization (not implemented yet)
// 4. test remove search token doesn't send the search param

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
  });
});
