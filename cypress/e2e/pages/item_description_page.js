export class ItemDescription{

    //Locators for Description page elements
    item_description_title = '#PostingTitle'
    item_description_price = '.numeric > .input > .json-form-input'

    //Type item title
    typeItemTitle(){
        cy.get(this.item_description_title).type("Easton Hockey Bag (with Wheels)")  //Title
    }
    
    //Type item price
    typeItemPrice(){
        cy.get(this.item_description_price).type(225)  //Price
    }

    

               



        //  //Fill up description of the item
        //  cy.get('#PostingTitle').type("Easton Hockey Bag (with Wheels)")  //Title
        //  cy.get('.numeric > .input > .json-form-input').type(225)  //Price
        //  cy.get('#geographic_area').type('Los Angeles')
        //  cy.get('#postal_code').type(90028)
        //  cy.get('#PostingBody').type("Easton Hockey Bag (with Wheels){Shift}{Enter}Sr size: 36 x 16 x 14{Shift}{Enter}Great shape, lightly used")
 
        //  // Select CheckBox "show my number"
        //  cy.get('.json-form-item.show_phone_ok > .show_phone_ok').click()
     
        //  //Type phone number
        //  cy.get('.variant-tel > .input > .json-form-input').type(3232036570)
     
        //  //Press Continue
        //  cy.get('.go').click()


}