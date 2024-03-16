describe('Registration functionality', () => {
  let userData;

  before(() => {
    cy.fixture('example.json').then((data) => {
      userData = data;
    });
  });

  it('verify register functionality with valid data', () => {
    // launch the application 
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('John')
    cy.get('#LastName').type('Doe') 
        
  
      // Delay each keypress by 0.1 sec
      cy.get('#Email').type(userData.email)
      cy.get('#Password').type(userData.password)
      cy.get('#ConfirmPassword').type(userData.password)
    
    cy.get('#register-button').click()
    let getText;
    cy.get('.result').should(($lis) => {
    expect($lis.eq(0), 'message').to.contain('Your registration completed')
        })
    cy.get('.ico-logout').click()
  })

  it('verify register functionality with empty data and validate the error messages', () => {
    // launch the application 
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-register').click()
  
    cy.get('#FirstName').clear()
    cy.get('#LastName').clear()
    cy.get('#Email').clear()
    cy.get('#Password').clear() 
    cy.get('#ConfirmPassword').clear()
    cy.get('#register-button').click()

    
    cy.get(':nth-child(2) > .form-fields > :nth-child(2) > .field-validation-error > span').should(($lis) => {
      expect($lis.eq(0), 'fname error message').to.contain('First name is required.')
          })

          cy.get(':nth-child(3) > .field-validation-error > span').should(($lis) => {
            expect($lis.eq(0), 'fname error message').to.contain('Last name is required.')
                })
                cy.get(':nth-child(4) > .field-validation-error > span').should(($lis) => {
                  expect($lis.eq(0), 'fname error message').to.contain('Email is required.')
                      })
                      cy.get(':nth-child(1) > .field-validation-error > span').should(($lis) => {
                        expect($lis.eq(0), 'fname error message').to.contain('Password is required.')
                            })

                            cy.get(':nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error > span').should(($lis) => {
                              expect($lis.eq(0), 'fname error message').to.contain('Password is required.')
                                  })


  })
})