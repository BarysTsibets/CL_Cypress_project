export class LoginPage{

    goToMyAccount(){
        cy.contains('my account').click()
    }

    enterUserName(){
        cy.get('#inputEmailHandle').type('barystsibets@gmail.com')
    }

    enterpassword(){
        cy.get('#inputPassword').type('361337aB!')
    }

    clickLogIn(){
        cy.get('#login').click()
    }

}