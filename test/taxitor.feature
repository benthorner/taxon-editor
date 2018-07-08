Feature: Taxitor
  Scenario: Viewing the root node
    Then I should see 1 level 0 nodes
    And I should see the 1st node contains "title"
    And I should see the 1st node contains "count"

  Scenario: Expanding a node
    When I double click on the 1st level 0 node
    Then I should see 2 level 1 nodes

  Scenario: Collapsing a node
    When I double click on the 1st level 0 node
    And I double click on the 1st level 0 node
    Then I should see 0 level 1 nodes

  Scenario: Adding a child node
    When I right click on the 1st level 0 node
    Then I should not see a taxmenu
    When I double click on the 1st level 0 node
    And I right click on the 1st level 0 node
    Then I should see a taxmenu with 1 items
    When I click on the "Create child" menu button
    Then I should see 3 level 1 nodes

  Scenario: Deleting a child node
    When I double click on the 1st level 0 node
    And I right click on the 1st level 1 node
    Then I should see a taxmenu with 1 items
    When I click on the "Delete" menu button
    Then I should see 1 level 1 nodes

  Scenario: Changing a node parent
    When I double click on the 1st level 0 node
    And I double click on the 1st level 1 node
    Then I should see 2 lines of nodes
    When I drag a level 2 node over a level 0 node
    Then I should see a taxmenu with 1 items
    When I click on the "Make child" menu button
    Then I should see 3 level 1 nodes
    And I should see 1 level 2 nodes

  Scenario: Using the wrap layout
    When I double click on the 1st level 0 node
    Then I should see 2 lines of nodes
    And I should see 2 nodes on line 0
    And I should see 1 nodes on line 1
    When I double click on the 1st level 1 node
    Then I should see 2 lines of nodes
    And I should see 3 nodes on line 0
    And I should see 2 nodes on line 1
    When I double click on the 1st level 2 node
    And I double click on the 1st level 3 node
    Then I should see 3 lines of nodes
    And I should see 4 nodes on line 0
    And I should see 4 nodes on line 1
    And I should see 1 nodes on line 2

  Scenario: Using the radial layout
    When I click on the "Radial" layout button
    And I double click on the 1st level 0 node
    Then I should see 3 lines of nodes
    When I double click on the 1st level 1 node
    And I double click on the 2nd level 1 node
    Then I should see 5 lines of nodes
    And I should see 2 nodes on line 0
    And I should see 1 nodes on line 1
    And I should see 1 nodes on line 2
    And I should see 1 nodes on line 3
    And I should see 2 nodes on line 4

  Scenario: Using the tree layout
    When I click on the "Tree" layout button
    And I double click on the 1st level 0 node
    Then I should see 2 lines of nodes
    And I should see 1 nodes on line 0
    And I should see 2 nodes on line 1
    When I double click on the 1st level 1 node
    Then I should see 3 lines of nodes
    And I should see 1 nodes on line 0
    And I should see 2 nodes on line 1
    And I should see 2 nodes on line 2

  Scenario: Using the force layout
    When I click on the "Force" layout button
    And I double click on the 1st level 0 node
    Then I should see 3 lines of nodes
    When I double click on the 1st level 1 node
    Then I should see 5 lines of nodes
