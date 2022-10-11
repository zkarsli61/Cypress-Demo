it('closes', () => {
    cy.visit("https://bistromd-staging.myshopify.com")
    cy.get('#password').type("notyet")
    cy.get('.btn').click()
    cy.wait(8000)
    // cy.get("#lightbox-iframe-bcae0f08-23da-4e6b-b6eb-3b37115eca83", { timeout: 10000 })
    //     .its('0.contentDocument').should('not.be.empty')
    //     .its('body')
    //     .as('body')           // alias this command chain

    // cy.get('@body')         // repeats above chain when <body> detached from DOM (replaced)
    //     .should('be.visible')
    //     .should('not.be.empty')
    // cy.get("#lightbox-iframe-bcae0f08-23da-4e6b-b6eb-3b37115eca83", { timeout: 10000 })
    //     .iframe1()

    //   cy.frameLoaded('[aria-label="Modal Overlay Box Frame"]')

    cy.then(() => {
        cy.wrap(
            window.top.document.querySelector('[aria-label="Close Modal"]'))
            .click({ force: true })
    })
    cy.contains('SHOP').click()
    cy.location('pathname').should('eq', '/pages/order')
})

