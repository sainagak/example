Feature: Refund of item
  
Background: give refund of any faulty item as per the guidelines
 
  @refund
 
  Scenario Outline: jeff returns faulty item
    Given jeff has brought microwave for <n>
    And jeff has receipt
    When jeff returns faulty item
    And jeff got the refund <r>
    
    Examples:
| n   | r  | 
|100  | 10 | 
|120  |10  |
|130  |10  |
