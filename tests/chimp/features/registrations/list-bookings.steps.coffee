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

    client.waitForExist '.registration-list-item'
    itemsVisible = client.isVisible '.registration-list-item'
    expect(itemsVisible.length > 0).toBe true