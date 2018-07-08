Feature: Session
  Scenario: Update URL query params
    Given I click on the "Radial" layout button
    And I click on the "GOV.UK" source button
    Then I should see the URL contains "source=Fake"
    And I should see the URL contains "layout=Radial"

  Scenario: Restore from URL params
    When I load the page with query "source=GOV.UK"
    Then I should see the "GOV.UK" source is selected
    And I should see the 1st node contains "GOV.UK"
    When I load the page with query "layout=Radial"
    And I double click on the 1st level 0 node
    Then I should see the "Radial" layout is selected
    Then I should see 3 lines of nodes
