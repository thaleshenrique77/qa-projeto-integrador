class ReceitaFederalPage {
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
    cy.contains("div.titulo > a", expectedText).should("be.visible");
  }

  navigateToMeuImpostoDeRenda() {
    cy.get(
      "#df78a375-91fd-42fd-93d6-c7c2fc1cf122 > .cover-banner-tile > a > img"
    )
      .scrollIntoView()
      .click({ force: true });
  }

  verifyPageContent() {
    cy.get("#breadcrumbs-current").should(
      "contain.text",
      "Meu Imposto de Renda"
    );
    cy.get(
      "#a5ff595a-7459-4fa2-84c9-514b23dc2d45 > .cover-richtext-tile > h2"
    ).should("contain.text", "Meu Imposto de Renda");
  }
}

const receita = new ReceitaFederalPage();
export default receita;
