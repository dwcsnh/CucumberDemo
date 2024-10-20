@function
Feature: Who's the GOAT?
    Every football fan wants to know who's the real GOAT

    Scenario: Is this player the GOAT
        Given "<player>" is the GOAT
        When I ask whether it's true
        Then I should be told "<answer>"

    Examples:
        |   player      |   answer              |
        |   Messi       |   Definitely!         |
        |   Cristiano   |   You must be kidding |
        |   Anyone else |   You must be kidding |