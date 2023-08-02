export class StarPosting {



    
    //function for startPosting flow
    selectCity(){
        cy.get('.new_posting_thing > select').contains('los angeles')
    }

    clickGo(){
        cy.get('.new_posting_thing > button').click()
    }

    selectArea(){
        cy.contains('central LA').click()
    }

    selectWhoIsSeller(){
        cy.contains('sale by owner').click()
    }

    selectcategory(){
        cy.contains('sporting goods').click()
    }





    //Begin posting: select categories
    // cy.get('.new_posting_thing > select').contains('los angeles')
    // cy.get('.new_posting_thing > button').click()
    // cy.contains('central LA').click()
    // cy.contains('sale by owner').click()
    // cy.contains('sporting goods').click()
    


    





}