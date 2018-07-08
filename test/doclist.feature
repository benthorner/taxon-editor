Feature: Doclist
  Scenario: Viewing taxode docs
    Then I should see a doclist with 10 docs
    And I should see the 1st doc contains "title"
    And I should see the 1st doc contains "descr"

  Scenario: Clicking on a doc
    When I click on the 1st doc
    Then I should be on the "www.google.com" page
