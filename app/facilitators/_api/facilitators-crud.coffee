create = ( facilitator ) ->
  Meteor.call 'create/facilitator', facilitator, ( error ) ->
    if error
      App.utils.notify.error error.reason
    else
      App.utils.notify.success 'Facilitator Created!'
      FlowRouter.go '/facilitators'

update = ( facilitator ) ->
  Meteor.call 'update/facilitator', facilitator, ( error ) ->
    if error
      App.utils.notify.error error.reason

remove = ( _id ) ->
  Meteor.call 'remove/facilitator', _id, ( error ) ->
    if error
      App.utils.notify.error error.reason
    else
      App.utils.notify.success 'Facilitator removed'

App.api.facilitators = {
  create, update, remove
}