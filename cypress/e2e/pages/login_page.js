export class LoginPage{

    loginpage_email_textbox = '#inputEmailHandle'
    loginpage_password_textbox = '#inputPassword'
    loginpage_login_button = '#login'
    loginpage_my_account_btn = 'my account'

    goToMyAccount(){
        cy.contains(this.loginpage_my_account_btn).click()
    }

    enterUserName(email){
        cy.get(this.loginpage_email_textbox).type(email)
        //barystsibets@gmail.com
    }

    enterpassword(paswd){
        cy.get(this.loginpage_password_textbox).type(paswd)
        //361337aB!
    }

    clickLogIn(){
        cy.get(this.loginpage_login_button).click()
    }

}