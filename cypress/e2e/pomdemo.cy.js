import {LoginPage} from "./pages/login_page"

const loginPage = new LoginPage()


it('test description', function(){
    
    // Open Main Page of CL and click "My account"
    cy.visit('https://losangeles.craigslist.org')


    loginPage.goToMyAccount()
    loginPage.enterUserName()
    loginPage.enterpassword()
    loginPage.clickLogIn()


    // cy.contains('my account').click()
    // Fill out LogIn text boxes
    // cy.get('#inputEmailHandle').type('barystsibets@gmail.com')
    // cy.get('#inputPassword').type('361337aB!')
    // cy.get('#login').click()

})