module.exports = ->
  url = require 'url'

  @Given /^I am logged in$/, (done) ->
    client.url process.env.ROOT_URL
    user = ->
      return Meteor.user()

    result = client.execute user
    if result.value
      console.log result
      done()
    else
      @authHelper.login done

  @Given /^there are bookings in the database$/, ->
    server.call 'bookings/seed'

  @When /^I visit "([^"]*)"$/, (page) ->
    client.url url.resolve process.env.ROOT_URL, page

  @When /^I click "([^"]*)"$/, (button) ->
    client.waitForExist button
    client.click button

  # View all *
  @Then /^I should see a list of "([^"]*)"$/, (item) ->
    listItemsExist = client.waitForExist item
    expect(listItemsExist).toBe true

  # View a single booking
  @Then /^I'm able to see the details of the booking$/, ->
    headerExists = client.waitForExist 'h2.page-header=Registration Detail'
    expect( headerExists ).toBe true

  # Delete a booking
  @Then /^I should be able to delete a booking$/, ->
    client.waitForExist '.registration-list-item'
    client.waitForExist '.delete-booking'
    items = client.elements '.registration-list-item'

    client.click '.delete-booking'

    itemsAfterDeletion = client.elements '.registration-list-item'

    expect(itemsAfterDeletion.value.length).toBe items.value.length-1

