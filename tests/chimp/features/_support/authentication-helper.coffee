module.exports = ->
  @Before ->
    @authHelper = 
      login: ->
        browser.url "#{process.env.ROOT_URL}/login"
        browser.waitForExist 'body *'
        browser.setValue '#email', 'alpha@aepit.co.za'
        browser.setValue '#password', 'password'
        browser.click 'button=Login'
        # client.executeAsync (d) =>
        #   Meteor.loginWithPassword 'alpha@aepit.co.za', 'password', d