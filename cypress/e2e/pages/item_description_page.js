export class ItemDescription{

    //Locators for Description page elements
    item_description_title = '#PostingTitle'
    item_description_price = '.numeric > .input > .json-form-input'
    item_description_city = '#geographic_area'
    item_description_zip = '#postal_code'
    item_description_body = '#PostingBody'
    item_check_box_show_my_number = '.json-form-item.show_phone_ok > .show_phone_ok'
    item_description_phone_number = '.variant-tel > .input > .json-form-input'
    item_press_continue = '.go'


    //Type description Title
    typeItemTitle(){
        cy.get(this.item_description_title).type("Easton Hockey Bag (with Wheels)")  //Title
    }
    
    //Type description Price
    typeItemPrice(){
        cy.get(this.item_description_price).type(225)  //Price
    }

    //Type description City
    typeItemCity(){
        cy.get(this.item_description_city).type('Los Angeles')  //City
    }

    //Type description Zip
    typeItemZip(){
        cy.get(this.item_description_zip).type(90028)  //Zip
    }

    //Type description body
    typeItemDescription(){
        cy.get(this.item_description_body).type("Easton Hockey Bag (with Wheels){Shift}{Enter}Sr size: 36 x 16 x 14{Shift}{Enter}Great shape, lightly used")
    }

    // Select CheckBox "show my number"
    selectShowMyNumber(){
        cy.get(this.item_check_box_show_my_number).click()
    }

    //Type phone number
    typeItemPhoneNumber(){
        cy.get(this.item_description_phone_number).type(3232036570)  //PhoneNumber
    }

    //Press Continue
        itemPressContinue(){
            cy.get(this.item_press_continue).click()
        }

    }

