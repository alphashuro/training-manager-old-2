login = (email, password) ->
  if !email
    App.utils.notify.error 'Email not specified'
    return

  if !password
    App.utils.notify.error 'Password not specified'
    return

  Meteor.loginWithPassword email, password, (error) =>
    if error then App.utils.notify.error error.reason
    else FlowRouter.go '/dashboard'

App.api.login = login