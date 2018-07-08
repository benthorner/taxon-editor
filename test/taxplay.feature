Feature: Taxplay
  Scenario: Viewing a taxode
    Then I should see the taxplay contains "id"
    And I should see the title input contains "title"
    And I should see the description input contains "descr"

  Scenario: Editing a taxode
    When I set the title input to "new title"
    And I click on the "Save" taxplay button
    Then I should see the title input contains "new title"
    And I should see the 1st node contains "new title"

  Scenario: Cancelling an edit
    When I set the title input to "new value"
    And I click on the "Reset" taxplay button
    Then I should see the title input contains "title"
