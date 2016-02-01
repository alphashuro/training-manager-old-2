Feature: Bookings

  As an organization
  I want to see a list of all bookings
  So that I know what courses are booked

  Scenario: View all bookings
    Given I am logged in
    And there are bookings in the database
    When I visit "/registrations"
    Then I should see a list of ".booking-list-item"

  Scenario: Add a new booking
    Given I am logged in
    When I visit "/registrations/add"
    Then I'm able to add a new booking

  Scenario: View a booking
    Given I am logged in
    And there are bookings in the database
    When I visit "/registrations"
    And I click the ".view-booking"
    Then I'm able to see the details of the booking

  Scenario: Delete a booking
    Given I am logged in
    And there are bookings in the database
    When I visit "/registrations"
    Then I should be able to delete a booking

  @focus
  Scenario: Add and remove students from a booking
    Given I am logged in
    And there are bookings in the database
    When I visit "/registrations"
    And I click ".view-booking"
    And I click ".add-students"
    And I select a client
    Then I should see a list of ".student-list-item"
    # And I shloud be able to toggle the
