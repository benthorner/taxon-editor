Feature: GOV.UK
  Background:
    Given I click on the "GOV.UK" schema button

  Scenario: Viewing the taxonomy
    Then I should see 1 level 0 nodes
    And I should see the 1st node contains "GOV.UK"
    And I should see the 1st node contains "25"
    When I double click on the 1st level 0 node
    Then I should see 20 level 1 nodes
    And I should see the 2nd node contains "Government"
    And I should see the 2nd node contains "25"

  Scenario: Viewing a taxon
    When I double click on the 1st level 0 node
    And I click on the 1st level 1 node
    Then I should see the taxplay contains "e48ab80a"
    And I should see the taxplay contains "Government"
    And I should see the taxplay contains "/government"
    And I should see the taxplay contains "Information"
