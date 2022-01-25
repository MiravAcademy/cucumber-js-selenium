Feature: Login to the application

   This feature tests the login functionality of Conduit application

   Scenario: Login with correct credentials
        Given Saurabh is a writer
        When Saurabh uses his credentials as "saurabh@nobleprog.com" and "saurabh" to login
        Then he should have access to the application

   Scenario: Login with correct credentials
      Given Saurabh is a writer
      When Saurabh uses his credentials as
         | saurabh@nobleprog.com |
         | saurabh            |
      Then he should have access to the application
      
 Scenario: Login with correct credentials
      Given Saurabh is a writer
      When Saurabh uses his credentials as map
        | username | saurabh@nobleprog.com |
        | password | saurabh               |
      Then he should have access to the application

Scenario: Login with correct credentials
      Given Saurabh is a writer
      When Saurabh uses his credentials as multiple map
        | username               | password    | name    |
        | saurabh@nobleprog.com  | saurabh     | saurabh |
      Then he should have access to the application