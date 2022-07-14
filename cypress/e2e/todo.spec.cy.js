/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Habit dashboard", () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it("Should display the todo page header", () => {
        cy.get('.header').contains('Todo').should("be.visible");
    })

    it("the input field should have a value when text is typed in", () => {
        cy.get('.input').type("Something");
        cy.get('.input').should("have.value", "Something");
    })

    it("todo item should be created when text is typed and add button is clicked", () => {
        cy.get('.input').type("Brush teeth");
        cy.contains("button", "Add").click();
        // cy.contains("Brush teeth");
        cy.get(".todo-item").should("be.visible").and("have.text","Brush teeth"); 
    })

    it("should check that the done todo item is displayed when a todo is clicked", () => {
        cy.get('.input').type("Brush teeth");
        cy.contains("button", "Add").click();
        cy.get(".todo-item").contains("Brush teeth").click();
        cy.get(".todo-item-active").should("be.visible");
    })

    it("checks that the correct number of tasks is displayed as items are added", () => {
        cy.get('.input').type("Brush teeth");
        cy.contains("button", "Add").click();
        cy.contains("1 task left").should("be.visible")
    })

    it("checks that the correct number of tasks is displayed as items are marked as done", () => {
        cy.get('.input').type("Brush teeth");
        cy.contains("button", "Add").click();
        cy.get(".todo-item").contains("Brush teeth").click();
        cy.contains("0 tasks left").should("be.visible")
    })
    

})