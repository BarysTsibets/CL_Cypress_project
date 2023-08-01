export class LoginPage{

    goToMyAccount(){
        cy.contains('my account').click()
    }

    enterUserName(email){
        cy.get('#inputEmailHandle').type(email)
        //barystsibets@gmail.com
    }

    enterpassword(paswd){
        cy.get('#inputPassword').type(paswd)
        //361337aB!
    }

    clickLogIn(){
        cy.get('#login').click()
    }

}