it('google test', ()=>{
    cy.visit('https://offerup.com')
    cy.contains('Log in').click()

// LogIn with Gmail
cy.get('.jss542').click()


//LogIn with Email
    //cy.get('[aria-label="Continue with email"] > .MuiTypography-root').click()
    //cy.get('.jss53 > .MuiTypography-root').click()
    //cy.get('.MuiGrid-spacing-xs-2 > :nth-child(1) > :nth-child(1) > .MuiGrid-spacing-xs-1 > :nth-child(2)').type('barystsibets@gmail.com')
    //cy.get(':nth-child(2) > :nth-child(1) > .MuiGrid-spacing-xs-1 > :nth-child(2)').type('361337aB')
    //cy.get('[data-testid="AuthDialogSubmitButton"] > .MuiTypography-root').click()
    //cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
})


