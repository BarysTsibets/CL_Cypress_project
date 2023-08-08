import {LoginPage} from "./pages/login_page"

const loginPage = new LoginPage()


describe('Login page test suit', function(){

    beforeEach(function(){
        cy.visit('https://losangeles.craigslist.org')
    })

    it('Login positive test case', function(){
    
        // Open Main Page of CL and click "My account"
        //cy.visit('https://losangeles.craigslist.org')
    
        loginPage.goToMyAccount()
        loginPage.enterUserName('barystsibets@gmail.com')
        loginPage.enterpassword('361337aB!')
        loginPage.clickLogIn()
    
    })
})
