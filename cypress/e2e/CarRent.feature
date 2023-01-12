Feature: Car Rent

    Scenario: User can see car list
        Given User opens cars search page
        When User choose country "Poland"
        And User choose city "Wroclaw"
        And User enters car model 
        And User choose valid pick-up date
        And User choose valid drop-off date
        And User clicks search button
        Then User can see list of available cars


    Scenario: User rents a car
        Given User opens cars search page
        When User choose country "Poland"
        And User choose city "Wroclaw"
        And User enters car model 
        And User choose valid pick-up date
        And User choose valid drop-off date
        And User clicks search button
        And User can see list of available cars
        And User clicks on rent button of a first available car
        And User can see car details
        And User clicks rent button
        Then User is presented with renatl form
        And User enters name "Jan"
        And User enters last name "Nowak"
        And User enters card number "4780679185463022"
        And User enters email "jan.nowak@niepodam.pl"
        And User clicks rent button
        # And User sees confirmation message



    Scenario: User cannot search a car without providing a valid date
        Given User opens cars search page
        When User choose country "Poland"
        And User choose city "Wroclaw"
        And User enters car model 
        And User choose invalid pick-up date
        And User choose invalid drop-off date
        And User clicks search button
        Then User can see invalid date error message
