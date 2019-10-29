Feature: demo web shop sucessful registration

  @login
  Scenario Outline: Succesful registration into demo web shop 
    Given user is on demo web shop page 
    And clicks on "<register>" 
    When user enters "<gender>" and  "<fname>" and "<lname>" and "<email>" and "<pwd>" and "<cpwd>" to register
     And  user clicks on reg 
    Then verifying the registration
    
    Examples:
    |gender  | fname    | lname   | email               |   pwd       |  cpwd      |
    | male   | sampath	| kinnera | xysampath@gmail.com	| kinnera123	| kinnera123 |
    | female | harsha   | sai     | xyganesh@gmail.com	| ganesh123	  | ganesh123	 |

