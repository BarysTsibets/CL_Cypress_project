export class ItemLocationPage{

    //Locators for Location page
    location_page_zip = '#postal_code'
    location_page_postal_code_box = '#postal_code'
    location_page_continue_btn = '.continue'

    typeLocationZip(zip){
        cy.get(this.location_page_zip).clear().type(zip)
    }

    postalCodeBox(){
        cy.get(this.location_page_postal_code_box)
    }

    pressContinue(){
        cy.get(this.location_page_continue_btn).should('be.visible').click()
    }
    
}
