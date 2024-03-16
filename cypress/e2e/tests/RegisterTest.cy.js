import registerPage from '../pages/registerPage.cy';
describe('register functionality', () => {
    it('verify register functionality with valid data', () => {
        registerPage.visit();
        registerPage.clickRegisterLink()
        registerPage.enterFirstName('Json')
        registerPage.enterLastName('Tester')
        registerPage.enterEmailName('Superbkjghj@yahol.com')
        registerPage.enterPassword('testing123')
        registerPage.enterconfirmpassword('testing123')
        registerPage.clickRegisterButton()
      
    });
  });