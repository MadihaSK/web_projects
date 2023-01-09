describe('Nike store Ecommerce test case', () => {
  it('Nike add to cart', () => {
    cy.visit('https://www.nike.com/de')
    cy.get(':nth-child(2) > .ncss-btn-primary-dark > #hf_cookie_text_cookieAccept').click()
    //cy.get('#gen-nav-commerce-header-v2 > div.pre-l-header-container > header > div > div.pre-l-wrapper.mauto-sm.d-sm-flx > div.pre-l-nav-box.flx-gro-sm-1 > nav > div.pre-l-desktop-menu.d-sm-h.d-lg-b.ta-sm-l.ta-lg-c > ul > li:nth-child(3)').trigger('mouseenter')
    
    //seacrh item in search box
    cy.get('#VisualSearchInput').type('pants')

    //select search product
    cy.get('#VisualSearchProduct-0 > .va-sm-m > h4.u-bold').click()
    
    //select product
    //cy.get(':nth-child(3) > .css-b8rwz8 > label > img').click()

    //select size
    cy.get(':nth-child(1) > .css-xf3ahq').click()

    //add to cart
    cy.get('.mt10-sm > .ncss-btn-primary-dark').click()


    })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    //used for all application related uncaught expcetion errors
    return false
  })
})