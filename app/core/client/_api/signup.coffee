signup = ({ email, password, org }) ->

  if !org
    App.utils.notify.error 'Organization name not specified'
    return

  if !email
    App.utils.notify.error 'Email not specified'
    return

  if !password
    App.utils.notify.error 'Passowrd not specified'
    return

  Meteor.call 'create/user', { email, password, org }, ( error ) ->
    if error then App.utils.notify.error error.reason
    App.api.login email, password  

App.api.signup = signup