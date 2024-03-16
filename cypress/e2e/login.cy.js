describe('Login functionality', () => {
 
  let userData;

  before(() => {
    cy.fixture('example.json').then((data) => {
      userData = data;
    });
  });


  it('verify login to application with valid data', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-login').click()
   
      // Delay each keypress by 0.1 sec
      cy.get('#Email').type(userData.email);

      cy.get('#Password').type(userData.password);

    
     cy.get('form > .buttons > .button-1').click()

    cy.get('.header-links > ul > :nth-child(1) > .account').should(($lis) => {
      expect($lis.eq(0), 'message').to.contain(userData.email)
          })
   cy.get('.ico-logout').click()
  })
})