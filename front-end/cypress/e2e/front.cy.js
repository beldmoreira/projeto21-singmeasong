const URL = "http://localhost:3000";
const URL_API = "http://localhost:5000";

before(() => {
    cy.resetDatabase();
});

describe("home", () => {
    it ("should navigate to /", () => {
        cy.visit("/");
        cy.url().should("equal", `${URL}/`);
        cy.get("input").should("be.visible");
    });

    it("should create recommendation", () => {
        cy.visit("/");
        cy.createRecommendation(first).then(name => {
            cy.contains(name);
        });
    });
});