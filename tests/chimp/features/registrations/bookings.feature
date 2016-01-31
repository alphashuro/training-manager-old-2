Feature: Bookings

  As an organization
  I want to see a list of all bookings
  So that I know what courses are booked

  Scenario: View all bookings
    Given I am logged in
    And there are bookings in the database
    When I visit "/registrations"
    Then I'm able to see all bookings in the database

  @focus
  Scenario: Add a new booking
    Given I am logged in
    When I visit "/registrations/add"
    Then I'm able to add a new booking

  Scenario: View a booking
    Given I am logged in
    And there are bookings in the database
    When I visit "/registrations"
    And I click the link to one of the bookings
    Then I'm able to see the details of the booking

  Scenario: Delete a booking
    Given I am logged in
    And there are bookings in the database
    When I visit "/registrations"
    And I click the delete button on one of the bookings
    Then the booking should be deleted