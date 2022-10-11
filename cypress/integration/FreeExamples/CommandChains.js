describe('', () => {
    it('', () => {
        cy.visit("https://example.cypress.io/commands/location?search=value&id=1234")

        cy.location("search")
            .should("include", "search=")
            .then(s => new URLSearchParams(s))
            .invoke("entries")
            .then(Array.from)
            .then(Cypress._.fromPairs)
            .then(console.log)
            .then(o => {
                Cypress._.updateWith(o, 'id', Number)
            })
            .should("deep.equal", {
                search: "value",
                id: 1234
            })
        // .should((search) => {
        //     const parsed = new URLSearchParams(search)
        //     const pairs = Array.from(parsed.entries())
        //     const plain = Cypress._.fromPairs(pairs)
        //     expect(plain, "search params").to.deep.equal({
        //         search: "value",
        //         id: "1234"
        //     })
    });
});