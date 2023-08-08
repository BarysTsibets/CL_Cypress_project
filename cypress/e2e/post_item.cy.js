import { LoginPage } from "./pages/login_page"
import { StarPosting } from "./pages/start_posting_pages"

const login = new LoginPage()
const startPost = new StarPosting()


describe('Post item on CraigsList Suit', function(){

    beforeEach(function(){
        cy.visit('https://losangeles.craigslist.org')
    })

    it('Create post on Craigslist.com e2e positive test', function(){
        //Login flow
        login.goToMyAccount()
        login.enterUserName('barystsibets@gmail.com')
        login.enterpassword('361337aB!')
        login.clickLogIn()

        //Start posting flow (select area/category/owner options)
        startPost.selectCity_before_post('los angeles')
        startPost.click_Go_btn()
        startPost.selectArea()
        startPost.selectWhoIsSeller()
        startPost.selectCategory()
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
        cy.get('#PostingTitle').type("Easton Hockey Bag (with Wheels)")  //Title
        cy.get('.numeric > .input > .json-form-input').type(225)  //Price
        cy.get('#geographic_area').type('Los Angeles')
        cy.get('#postal_code').type(90028)
        cy.get('#PostingBody').type("Easton Hockey Bag (with Wheels){Shift}{Enter}Sr size: 36 x 16 x 14{Shift}{Enter}Great shape, lightly used")

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
