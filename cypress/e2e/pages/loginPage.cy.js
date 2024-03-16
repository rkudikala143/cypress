// homePage.js
class loginPage {
    visit() {
      cy.visit('/');
    }
  
    getHeaderText() {
      return cy.get('h1');
    }
  
    // Add more methods for interacting with elements on the home page
  }
  
  export default new loginPage();