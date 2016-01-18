logout = ->
  Meteor.logout ( error ) ->
    if error
      App.utils.notify.error error.reason
    else
      App.utils.notify.success 'Logged out.'
      FlowRouter.go '/login'

App.api.logout = logout