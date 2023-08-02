export class StarPosting {

    //Locators for Start Posting flow
    start_posting_page_city_drop_down = '.new_posting_thing > select'
    start_posting_go_btn = '.new_posting_thing > button'
    start_posting_area_LA_radio_btn = 'central LA'
    start_posting_seller_owner_radio_btn = 'sale by owner'
    start_posting_category_radio_btn = 'sporting goods'

    //function for startPosting flow
    selectCity_before_post(city){
        cy.get(this.start_posting_page_city_drop_down).contains(city)
        
    }

    click_Go_btn(){
        cy.get(this.start_posting_go_btn).click()
    }

    selectArea(){
        cy.contains(this.start_posting_area_LA_radio_btn).click()
    }

    selectWhoIsSeller(){
        cy.contains(this.start_posting_seller_owner_radio_btn).click()
    }

    selectCategory(){
        cy.contains(this.start_posting_category_radio_btn).click()
    }

    //Begin posting: select categories
    // cy.get('.new_posting_thing > select').contains('los angeles')
    // cy.get('.new_posting_thing > button').click()
    // cy.contains('central LA').click()
    // cy.contains('sale by owner').click()
    // cy.contains('sporting goods').click()
}