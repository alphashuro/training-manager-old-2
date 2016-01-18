create = ( { title, description, maxStudents } ) ->
  Meteor.call 'create/course', { title, description, maxStudents }, ( error ) ->
    if error
      App.utils.notify.error error.reason
    else
      App.utils.notify.success 'Course Created!'
      FlowRouter.go '/courses'

update = ( { _id, title, description, maxStudents } ) ->
  Meteor.call 'update/course', { _id, title, description, maxStudents }, ( error ) ->
    if error
      App.utils.notify.error error.reason

remove = ( _id ) ->
  Meteor.call 'remove/course', _id, ( error ) ->
    if error
      App.utils.notify.error error.reason
    else
      App.utils.notify.success 'Course removed'

App.api.courses = {
  create, update, remove
}