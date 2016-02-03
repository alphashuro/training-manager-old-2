module.exports = ->
  @Before ->
    @authHelper =
      login: (done) ->
        client.url "#{process.env.ROOT_URL}/login"
        client.waitForExist 'body *'
        client.setValue '#email', 'alpha@aepit.co.za'
        client.setValue '#password', 'password'
        client.click 'button=Login'
        client.waitForExist '.page-header=Dashboard'
        console.log 'logged in'
        done()
