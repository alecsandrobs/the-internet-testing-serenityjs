@theInternet @elements
Feature: Add/Remove Elements
  As an user of the internet application
  John wants to add or remove elements from the screen
  So that he can maniuplates the elements

  Background:
    Given that John accesses the internet application at the Add Remove Elements page

  @elementsAdd
  Scenario: Adding elements
    When he clicks 5 times to add an element
    Then he should see that there are 5 buttons with the name "Delete"

  @elementsRemove
  Scenario: Removing elements
    And he is aware that have 5 buttons added
    When he removes 3 elements
    Then he should see that there are 2 buttons with the name "Delete"