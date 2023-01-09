
describe('Tricentis website', () => {
  it('Submit contact form', () => {

  // visit website link
    cy.visit('https://pk.sapphireonline.pk/')

    // scroll to bottom footer
    cy.scrollTo('bottom')

    // click contact us from footer to open contact form
    cy.get('.bl-footer-4 > .t4s-col-inner > .t4s-footer-content > .t4s-footer-menu > .t4s-footer-linklist > :nth-child(3) > .t4s-footer-link').click()

    //Fill contact form
    cy.get('#contact_form_page-name').type('Test user')
    cy.get('#contact_form_page-email').type('test@yahoo.com')
    cy.get('#contact_form_page-phone').type('03456789354')
    cy.get('#contact_form_page-message').type('I have received wrong article kindly return it')

    // submit form
    cy.get('#contact_form_page > .t4s-btn').click()

    Cypress.Commands.add("clickRecaptcha", () => {
      cy.window().then(win => {
        win.document
          .querySelector("iframe[src*='recaptcha']")
          .contentDocument.getElementById("recaptcha-token")
          .click();
      })
    })
    
    
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    //used for all application related uncaught expcetion errors
    return false
  })
})