// homePage.js
class registerPage {
    visit() {
      cy.visit('https://demowebshop.tricentis.com/');
    }
  
    getHeaderText() {
      return cy.get('h1');
    }
  
    clickRegisterLink(){
        cy.get('.ico-register').click()
    }
    enterFirstName(firstName) {
        cy.get('#FirstName').type(firstName)
    }
    enterLastName(lastName) {
        cy.get('#LastName').type(lastName)
    }
    enterEmailName(email) {
        cy.get('#Email').type(email)
    }
    enterPassword(password) {
        cy.get('#Password').type(password)
    }
    enterconfirmpassword(confirmPassword) {
        cy.get('#ConfirmPassword').type(confirmPassword)
    }
    clickRegisterButton(){
        cy.get('#register-button').click()
    }
    // Add more methods for interacting with elements on the home page
  }
  
  export default new registerPage();