create = ( client ) ->
  Meteor.call 'create/client', client, ( error ) ->
    if error
      App.utils.notify.error error.reason
    else 
      App.utils.notify.success 'Client Created!'
      FlowRouter.go '/clients'

update = ( client ) ->
  Meteor.call 'update/client', client, ( error ) ->
    if error
      App.utils.notify.error error.reason

remove = ( _id ) ->
  Meteor.call 'remove/client', _id, ( error ) ->
    if error
      App.utils.notify.error error.reason
    else
      App.utils.notify.success 'Clients removed'

App.api.clients = {
  create, update, remove
}