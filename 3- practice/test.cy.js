describe('Invoice creation', () => {

    it('just a test', () => {
        
        cy.visit('https://staging.lano.io/en/login')
        cy.get('#user_email').type('nabeel.ahmed+1578@lano.io')
        cy.get('#user_password').type('Testuser123!') 
        cy.contains('Sign in').click()
    

        cy.get(':nth-child(4) > a > .nav-label').click()

      })

    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        //used for all application related uncaught expcetion errors
        return false
      })
})