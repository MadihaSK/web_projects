describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('#W0wltc > .QS5gu').click()
    cy.get('.gLFyf').type("cake{enter}")
    cy.get('.MUFPAc > :nth-child(2) > a').click()
    //cy.{enter}
    //
  })
})