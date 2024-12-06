class ReceitaFederalAdicionaisPage {
  navigateToPortal() {
    cy.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("$ is not defined")) {
        return false;
      }
    });
    cy.visit("https://www.gov.br/receitafederal/pt-br");
  }

  dismissPopup() {
    cy.get("body").click(0, 0);
  }

  searchForTerm(term) {
    cy.get(".fa-search").click();
    cy.get("#searchtext-input").type(`${term}{enter}`);
  }

  verifySearchResults(expectedText) {
    cy.contains("div.titulo > a", new RegExp(expectedText, "i")).should(
      "be.visible"
    );
  }

  verifyNoSearchResults() {
    cy.contains("Nenhum resultado encontrado em").should("be.visible");
  }

  navigateToServicos() {
    cy.contains("a", "Serviços").scrollIntoView().click({ force: true });
  }

  navigateToAplicativos() {
    cy.contains("a", "Galeria de Aplicativos").scrollIntoView().click({ force: true });
  }

  verifyBreadcrumb(expectedText) {
    cy.get("#breadcrumbs-current").should("contain.text", expectedText);
  }
}

const receitaAdicionais = new ReceitaFederalAdicionaisPage();
export default receitaAdicionais;
