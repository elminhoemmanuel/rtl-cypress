/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Habit dashboard", () => {
    beforeEach(() => {
        cy.visit('/followers');
    })

    it("Should display the followers page header", () => {
        cy.get('.header').contains('Followers').should("be.visible");
    })

    it("Should display the correct list of followers when fetched", () => {
        cy.intercept("GET", "https://randomuser.me/api/?results=5", {
            fixture:"followers"
        });
        cy.visit('/followers');
        // cy.get(".followerslist-holder").should("contain", "Sneha")
    })

})