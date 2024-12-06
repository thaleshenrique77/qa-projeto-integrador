Feature: Testes adicionais no Portal da Receita Federal

  Scenario: O usuário busca por "CPF" no portal
    Given que o usuário acessa o portal da Receita Federal
    And fecha qualquer pop-up exibido
    When o usuário busca pelo termo "CPF"
    Then os resultados exibidos devem conter "CPF"

  Scenario: O usuário busca por um termo inexistente "daposkdaopskpoekoapds"
    Given que o usuário acessa o portal da Receita Federal
    And fecha qualquer pop-up exibido
    When o usuário busca pelo termo "daposkdaopskpoekoapds"
    Then deve ser exibida mensagem de que não foram encontrados resultados

  Scenario: O usuário navega para a seção "Serviços"
    Given que o usuário acessa o portal da Receita Federal
    And fecha qualquer pop-up exibido
    When o usuário clica na seção "Serviços"
    Then a página exibida deve conter "Serviços" no breadcrumb

  Scenario: O usuário navega para a seção "Galeria de Aplicativos"
    Given que o usuário acessa o portal da Receita Federal
    And fecha qualquer pop-up exibido
    When o usuário clica na seção "Galeria de Aplicativos"
    Then a página exibida deve conter "Apps" no breadcrumb
