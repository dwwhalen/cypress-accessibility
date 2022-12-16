/// <reference types="cypress" />

describe('accessibility test', () => {
    it('scan todo page for accessibility issues', () => {
        cy.visit('https://example.cypress.io/todo')
            .getCompliance('todo scan')
            .then((report) => {
                console.warn(report);
                expect(report.results).to.have.lengthOf(0);
            });
    })
    it('scan msn page for accessibility issues', () => {
        cy.visit('https://msn.com')
            .getCompliance('msn scan')
            .then((report) => {
                console.warn(report);
                expect(report.results).to.have.lengthOf(0);
            });
    })
})