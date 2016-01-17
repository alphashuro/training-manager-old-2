signup = ({email, password, profile }) ->
  check email, String
  check password, String
  check profile, Object

  if !profile.org
    App.utils.notify.error 'Organization not specified'
    return

  if !email
    App.utils.notify.error 'Email not specified'
    return

  if !password
    App.utils.notify.error 'Passowrd not specified'
    return

  Accounts.createUser { email, password, profile }, ( error, userId ) ->
    if error then App.utils.notify.error error.reason
    else  
      Roles.addUsersToRoles userId, 'admin', profile.org
      FlowRouter.go '/dashboard'

App.api.signup = signup