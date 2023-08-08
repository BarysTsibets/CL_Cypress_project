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
    typeItemTitle(title){
        cy.get(this.item_description_title).type(title)  //Title
    }
    
    //Type description Price
    typeItemPrice(price){
        cy.get(this.item_description_price).type(price)  //Price
    }

    //Type description City
    typeItemCity(city){
        cy.get(this.item_description_city).type(city)  //City
    }

    //Type description Zip
    typeItemZip(zip){
        cy.get(this.item_description_zip).type(zip)  //Zip
    }

    //Type description body
    typeItemDescription(body){
        cy.get(this.item_description_body).type(body)  //Post description
    }

    // Select CheckBox "show my number"
    selectShowMyNumber(){
        cy.get(this.item_check_box_show_my_number).click()
    }

    //Type phone number
    typeItemPhoneNumber(phone_number){
        cy.get(this.item_description_phone_number).type(phone_number)  //PhoneNumber
    }

    //Press Continue
        itemPressContinue(){
            cy.get(this.item_press_continue).click()
        }

    }

