create = ( student ) ->
  Meteor.call 'create/student', student , ( error ) ->
    if error
      App.utils.notify.error error.reason

update = ( student ) ->
  Meteor.call 'update/student', student, ( error ) ->
    if error
      App.utils.notify.error error.reason

remove = ( _id ) ->
  Meteor.call 'remove/student', _id, ( error ) ->
    if error
      App.utils.notify.error error.reason

App.api.students = {
  create, update, remove
}