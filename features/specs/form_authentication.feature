@theInternet @formAuthentication
Feature: Form Authentication
  As an internet application user
  Micheli wants to login
  So she can use the system safely

  Background:
    Given that Micheli accesses the internet application at Login Page

  @formAuthenticationSuccessful
  Scenario: Successful login
    When she logs in the systems with her credentials
      | username | tomsmith             |
      | password | SuperSecretPassword! |
    Then she should see she is in the secure area

  @formAuthenticationInvalidCredential
  Scenario Outline: Login with invalid credentials
    When she logs in the systems with her credentials
      | username | <username> |
      | password | <password> |
    Then she should see that the password is invalid with the message "Your <credential> is invalid!"

    Examples:
      | username | password             | credential |
      | tomsmith | SuperSecretPassword  | password   |
      | smithtom | SuperSecretPassword! | username   |