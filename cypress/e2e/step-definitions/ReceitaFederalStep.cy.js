import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import receita from "../page-objects/ReceitaFederalPage.cy";

Given("que o usuário acessa o portal da Receita Federal", () => {
  receita.navigateToPortal();
});

Given("fecha qualquer pop-up exibido", () => {
  receita.dismissPopup();
});

When("o usuário busca pelo termo {string}", (termo) => {
  receita.searchForTerm(termo);
});

Then("os resultados exibidos devem conter {string}", (resultado) => {
  receita.verifySearchResults(resultado);
});

When('o usuário clica na seção "Meu Imposto de Renda"', () => {
  receita.navigateToMeuImpostoDeRenda();
});

Then(
  "a página exibida deve conter {string} no breadcrumb",
  (breadcrumbText) => {
    cy.get("#breadcrumbs-current").should("contain.text", breadcrumbText);
  }
);

Then("deve conter {string} no cabeçalho principal", (headerText) => {
  cy.get(
    "#a5ff595a-7459-4fa2-84c9-514b23dc2d45 > .cover-richtext-tile > h2"
  ).should("contain.text", headerText);
});
