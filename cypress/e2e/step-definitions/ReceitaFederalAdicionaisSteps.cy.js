import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import receitaAdicionais from "../page-objects/ReceitaFederalAdicionaisPage.cy";

Given("que o usuário acessa o portal da Receita Federal", () => {
  receitaAdicionais.navigateToPortal();
});

Given("fecha qualquer pop-up exibido", () => {
  receitaAdicionais.dismissPopup();
});

When("o usuário busca pelo termo {string}", (termo) => {
  receitaAdicionais.searchForTerm(termo);
});

Then("os resultados exibidos devem conter {string}", (resultado) => {
  receitaAdicionais.verifySearchResults(resultado);
});

Then(
  "deve ser exibida mensagem de que não foram encontrados resultados",
  () => {
    receitaAdicionais.verifyNoSearchResults();
  }
);

When('o usuário clica na seção "Serviços"', () => {
  receitaAdicionais.navigateToServicos();
});

When('o usuário clica na seção "Galeria de Aplicativos"', () => {
  receitaAdicionais.navigateToAplicativos();
});

Then(
  "a página exibida deve conter {string} no breadcrumb",
  (breadcrumbText) => {
    receitaAdicionais.verifyBreadcrumb(breadcrumbText);
  }
);
