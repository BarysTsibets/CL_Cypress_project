export class LoginPage{

    // Locators for LoginPage elements
    loginpage_email_textbox = '#inputEmailHandle'
    loginpage_password_textbox = '#inputPassword'
    loginpage_login_button = '#login'
    loginpage_my_account_btn = 'my account'

    //functions for Login Page
    goToMyAccount(){
        cy.contains(this.loginpage_my_account_btn).click()
    }

    enterUserName(email){
        cy.get(this.loginpage_email_textbox).type(email)
    }

    enterpassword(paswd){
        cy.get(this.loginpage_password_textbox).type(paswd)
    }

    clickLogIn(){
        cy.get(this.loginpage_login_button).click()
    }

}