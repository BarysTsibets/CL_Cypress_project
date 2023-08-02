import { LoginPage } from "./pages/login_page"

const login = new LoginPage()



describe('Post item on CraigsList Suit', function(){

    beforeEach(function(){
        cy.visit('https://losangeles.craigslist.org')
    })

    it('Create post on Craigslist.com e2e positive test', function(){
        login.goToMyAccount()
        login.enterUserName('barystsibets@gmail.com')
        login.enterpassword('361337aB!')
        login.clickLogIn()
        
    })


    it.skip('Create post on Craigslist.com template', function () {
        // Open Main Page of CL and click "My account"
        //cy.visit('https://losangeles.craigslist.org')
        cy.contains('my account').click()
    
        // Fill out LogIn text boxes
        cy.get('#inputEmailHandle').type('barystsibets@gmail.com')
        cy.get('#inputPassword').type('361337aB!')
        cy.get('#login').click()    
    
        //Begin posting: select categories
        cy.get('.new_posting_thing > select').contains('los angeles')
        cy.get('.new_posting_thing > button').click()
        cy.contains('central LA').click()
        cy.contains('sale by owner').click()
        cy.contains('sporting goods').click()
    
        
        //Fill up description of the item
        cy.get('#PostingTitle').type("7'6 Surfboard - Mid Length")  //Title
        cy.get('.numeric > .input > .json-form-input').type(225)  //Price
        cy.get('#geographic_area').type('Los Angeles')
        cy.get('#postal_code').type(90028)
        cy.get('#PostingBody').type("7’6 Surfboard - Black Board {Shift}{Enter}7,6 x 21 x 2 3/4{Shift}{Enter}Great transition or beginner  mid length surfboard.{Shift}{Enter}Watertight. Comes with fins and leash{Shift}{Enter}Ready to surf 🏄‍♀️ 🏄‍♂️")
    
        // Select CheckBox "show my number"
        cy.get('.json-form-item.show_phone_ok > .show_phone_ok').click()
    
        //Type phone number
        cy.get('.variant-tel > .input > .json-form-input').type(3232036570)
    
        //Press Continue
        cy.get('.go').click()
    
        //Assert that postal code match on Address page
        cy.get('.postal > label > .label').should('contain', 'postal')
        cy.get('#postal_code').clear().type('90028')
            .should('contain.value', '90028')        //assertion using 'cantain.value'
            .and('have.value', 90028)                 //assertion using 'have.value'
    
        //"continue button"
        cy.get('.continue').should('be.visible').click()
    
        //Press "Upload Picture"
        cy.get('#plupload').should('be.visible').click()
    
    })





})













