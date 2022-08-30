it("should not be able to log in without valid credentials", () => {
  cy.viewport(1920, 1080);
  cy.visit("https://the-internet.herokuapp.com/login");
  cy.get(".radius").click();
  cy.get("#flash").contains("Your username is invalid!");
});

it("should get logged in", () => {
  cy.viewport(1920, 1080);
  cy.get("#username").type("tomsmith");
  cy.get("#password").type("SuperSecretPassword!");
  cy.get(".radius").click();
  cy.url().should("be.equal", "https://the-internet.herokuapp.com/secure");
  cy.get("#flash").contains("You logged into a secure area!");
});

it("should get logged out", () => {
  cy.viewport(1920, 1080);
  cy.get(".button").click();
  cy.get("#flash").contains("You logged out of the secure area!");
});
