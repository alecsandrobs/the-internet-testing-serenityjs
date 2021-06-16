@theInternet @hover
Feature: Hovers
  As an user of the internet application
  Jane wants to access user data
  So that she can their information

  Background:
    Given that Jane accesses the internet application at the Hovers page

  @hoverUserDetails
  Scenario: Seeing user details
    When she puts the mouse over the user 2
    Then she should see that the user name is "user2"
    When she access that user details
    Then she should see that she is at the user details page