#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Demo web shop options

Background: 
Given karthik launched chrome browser
And launched demo url
  @login
  Scenario: Login process of demo web shop
 
    When clicked on login 
    And and provided valid credentials 
    Then he should see home page
    
  @register
  Scenario Outline: registration process of demo web shop
   
    When karthik enter "<uname>" and "<fname>" and  "<lname>" and  "<email>"
    And clicks on rgister
    Then he should see homepage with registration successful

    Examples: 
      | uname | fname | lname  | email |
      | sai   |    k  | sai    |sai@gmail.com|
      | gani  |     t | ganesh |gani@gmail.com|
