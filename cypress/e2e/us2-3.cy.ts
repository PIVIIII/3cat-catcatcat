describe('Acceptance criteria 1', () => {
  it('correct cost', () => {

    cy.visit('/api/auth/signin')

    cy.get('#input-email-for-credentials-provider').type('PremiumCypress@gmail.com');
    cy.get('#input-password-for-credentials-provider').type('123456');
    cy.get('button[type="submit"]').click();

    cy.visit('/reservation')
    //select coop
    cy.get('#coop').click();
    cy.get('.MuiMenu-list').children().first().click();

    //  select time
    cy.get('tr:contains("Start time")').find('input').type('05/05/2024 01:00 PM');
    // Select End time
    cy.get('tr:contains("End time")').find('input').type('05/05/2024 01:05 PM');

    cy.contains('#Cost', '180 Baht (from 200)')
    .should('be.visible')
  })
});
