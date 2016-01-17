login = (email, password) ->
  console.log "#{email} is logging in"

  check email, String
  check password, String

  Meteor.loginWithPassword email, password, (error) =>
    if error then App.utils.notify.error error.reason
    else FlowRouter.go '/dashboard'

App.api.login = login