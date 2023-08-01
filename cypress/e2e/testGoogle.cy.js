/// <reference types='cypress'/>

it('google test',function(){
    cy.visit('https://www.google.com/')

    cy.get('#APjFqb', {timeout:5000}).type('Automation Step by step{Enter}')

    cy.wait(7000)
    cy.contains('Videos').click()
    
})