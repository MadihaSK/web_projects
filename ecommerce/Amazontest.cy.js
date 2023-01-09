
describe('Amazon add to cart as a guest test', () => {
  it('Add item to basket', () => {
    //code to visit amayon web
    cy.visit('https://www.amazon.de/')

    //accept cookies
    cy.get('#a-autoid-0').click()

    // tzpe something in search bar
    cy.get('#twotabsearchtextbox').type('laptop 17 zoll')

    //click search button
    cy.get('#nav-search-submit-button').click()

    // open selected item
    cy.get('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(4) > div > div > div > div > div > div > div > div.sg-col.sg-col-4-of-12.sg-col-4-of-16.sg-col-4-of-20.s-list-col-left > div > div.s-product-image-container.aok-relative.s-image-overlay-grey.s-text-center.s-padding-left-small.s-padding-right-small.s-flex-expand-height').click()
    
    // click add to cart buton
    cy.get('#add-to-cart-button').click()  

    //select no extra protection option
    cy.get('#attachSiNoCoverage').click()

    // close add to cart success modal
    cy.get('#attach-close_sideSheet-link').click()

    // click cart above menu, to see cart as a guest
    cy.get('#nav-cart').click()

     //proceed to checkout
    cy.get('#sc-buy-box-ptc-button > span > input').click()

// Register new user
//cy.get('#nav-link-accountList > .nav-line-2').click()
cy.get('#createAccountSubmit').click()
cy.get('#ap_customer_name').type('Test User')
cy.get('#ap_email').type('usercypress0@gmail.com')
cy.get('#ap_password').type('test12345')
cy.get('#ap_password_check').type('test12345')
cy.get('#continue').click()
cy.get('#cvf-aamation-challenge-iframe').click()
//cy.contains('#Lösen Sie die Aufgabe').click()

    //cy.get('#nav-link-accountList > span > span').trigger('mouseenter', { force: true })
    

   

    //register user to checkout with email
    //cy.get('#ap_email').type('test@yahoo.com')
  
    // click continue button to enter password
    //cy.get('#continue').click()

    // enter password
    //cy.get('#ap_password').type('test12345{enter}')

    //click register button
    //cy.get('#signInSubmit').click()


  }) //  Add item to basket ends here

 // it('Registration', () => {

    // code for the next case here
    //cy.get('#nav-link-accountList').trigger('mouseenter')
    
 // })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    //used for all application related uncaught expcetion errors
    return false
  })
})