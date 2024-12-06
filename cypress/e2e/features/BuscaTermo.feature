Feature: Busca no Portal da Receita Federal

  Scenario: O usuário busca por "Imposto de Renda" no portal
    Given que o usuário acessa o portal da Receita Federal
    And fecha qualquer pop-up exibido
    When o usuário busca pelo termo "Imposto de Renda"
    Then os resultados exibidos devem conter "imposto de renda"
