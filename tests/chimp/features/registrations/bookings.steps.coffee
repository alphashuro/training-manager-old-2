module.exports = ->
  url = require 'url'

  @Given /^I am logged in$/, (done) ->
    @authHelper.login()
    setTimeout done, 3000

  @Given /^there are bookings in the database$/, ->
    server.call 'bookings/seed'

  @When /^I visit "([^"]*)"$/, (page) ->
    browser.url url.resolve process.env.ROOT_URL, page

  @Then /^I'm able to see all bookings in the database$/, ->
    client.waitForExist '.registration-list-item'
    itemsVisible = client.isVisible '.registration-list-item'
    expect(itemsVisible.length > 0).toBe true