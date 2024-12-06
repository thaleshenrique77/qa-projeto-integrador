# Projeto de Testes Automatizados com Cypress, Cucumber (Gherkin) e Page Objects


# Alunos: 
## Thales Henrique Guedes de Souza
## Victor Gabriel Mendes Soares
## Jeimison Guimarães de Albuquerque
## Analicia Fernandes Aquino Guedes
## Hugo Anísio dos Santos Pereira

# Link do Vídeo de Apresentação:
##

Este projeto demonstra a automação de testes funcionais da interface web do portal da Receita Federal (https://www.gov.br/receitafederal/pt-br) utilizando as seguintes tecnologias:

- [Cypress](https://www.cypress.io/): Framework de testes de front-end em JavaScript.
- [Cucumber](https://cucumber.io/) e [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor): Fornece suporte à escrita de testes em Gherkin (arquivos `.feature`) para testes mais legíveis, no formato Given/When/Then.
- Padrão Page Objects: Facilita a manutenção e legibilidade dos testes, centralizando localizadores e ações em classes específicas.



- **`cypress/e2e/features`**: Contém os arquivos `.feature` escritos em Gherkin que descrevem os cenários de teste.
- **`cypress/e2e/steps`**: Contém os arquivos `.js` com a implementação (step definitions) dos steps descritos nos arquivos `.feature`.
- **`cypress/support/page-objects`**: Contém as classes de Page Objects. Cada classe mapeia elementos do DOM e ações sobre uma página específica.
- **`cypress/support/e2e.js`**: Arquivo de configuração do Cypress para carregar comandos e configurações adicionais.

## Configuração do Ambiente

**Pré-requisitos:**
- Node.js instalado
- NPM ou Yarn

### Instalação das dependências

No diretório raiz do projeto, execute:

```bash
npm install
```
ou
```bash
yarn install
```

Isso instalará o Cypress, cypress-cucumber-preprocessor e outras dependências necessárias, conforme descrito no package.json.
Configuração do Cucumber

Certifique-se que o cypress-cucumber-preprocessor está configurado corretamente no arquivo cypress.config.js (ou cypress.config.ts dependendo da sua versão):



## Execução dos Testes
- Executar os testes em modo interativo (GUI):
```bash
npx cypress open
```


- Executar os testes em modo headless (CLI):
```bash
npx cypress run --browser electron
```


# Boas Práticas

- Manter os cenários simples e claros, focando no comportamento da aplicação.
- Criar Page Objects para reutilizar seletores e ações.
- Separar a lógica de testes (Cenários Gherkin + Steps) da lógica de interação com a página (Page Objects).
- Garantir que os testes sejam independentes entre si, evitando dependência da ordem de execução.
- Usar asserts claros e verificar se a ação esperada realmente ocorreu na UI.