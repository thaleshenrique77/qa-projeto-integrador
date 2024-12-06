Feature: Navegação para "Meu Imposto de Renda"

  Scenario: O usuário navega para a seção "Meu Imposto de Renda"
    Given que o usuário acessa o portal da Receita Federal
    And fecha qualquer pop-up exibido
    When o usuário clica na seção "Meu Imposto de Renda"
    Then a página exibida deve conter "Meu Imposto de Renda" no breadcrumb
    And deve conter "Meu Imposto de Renda" no cabeçalho principal
