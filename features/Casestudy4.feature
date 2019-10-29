
Feature: invalid cart value

  @cart
  Scenario: empty cart
    Given alexa homepage
    And alexa clicks on login link
    When alexa enters credentials in box
    And alexa logins and clicks on shoping cart
    And alexa will see your cart is empty 
    

  