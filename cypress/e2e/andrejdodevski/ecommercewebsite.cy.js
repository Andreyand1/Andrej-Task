it("should get number of products on page", () => {
  cy.viewport(1920, 1080);
  cy.visit("https://react-shopping-cart-67954.firebaseapp.com/");
  cy.get(".sc-124al1g-2").should("have.length", 16);
});

it("should add product to cart", () => {
  cy.get(".sc-124al1g-2").eq(3).contains("Add to cart").click();
});

it("should verify that Cart is opened", () => {
  cy.get(".sc-1h98xa9-5").contains("Cart");
});

it("should verify that checkout can be completed", () => {
  cy.viewport(1920, 1080);
  cy.get(".sc-1h98xa9-11").contains("Checkout").click();
});
