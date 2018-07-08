Feature: Taxplay
  Scenario: Viewing a taxode
    Then I should see the taxplay contains "id"
    And I should see the title field contains "title"
    And I should see the description field contains "descr"

  Scenario: Editing a taxode
    When I set the title field to "new title"
    And I click on the "Save" taxplay button
    Then I should see the title field contains "new title"
    And I should see the taxitor contains "new title"

  Scenario: Cancelling an edit
    When I set the title field to "new value"
    And I click on the "Reset" taxplay button
    Then I should see the title field contains "title"
