@Registration
Feature: Validate NTL Taxi homepage
Scenario Outline: Verify whether user is able to register
Given Open Browser as <BROWSER>
Then Enter URL as <URL>
Then Enter Username as <USERNAME>
And Enter Mobilenum as <MOBILENUM>
Then Enter Pickup Address as <PICADD>
And Enter Drop Address as <DROPADD>
When select vechicle type as <VECHICLETYPE>
But Don't click book button 
Examples:
|BROWSER|URL|USERNAME|MOBILENUM|PICADD|DROPADD|VECHICLETYPE|
|FireFox|http://www.ntltaxi.com/|abcd|1234567890|Adyar|Tambaram|Sedan|
|FireFox|http://www.ntltaxi.com/|abcd1|1234567890|Adyar|Tambaram|Sedan|
|FireFox|http://www.ntltaxi.com/|abcd2|1234567890|Adyar|Tambaram|Sedan|
|FireFox|http://www.ntltaxi.com/|abcd3|1234567890|Adyar|Tambaram|Sedan|