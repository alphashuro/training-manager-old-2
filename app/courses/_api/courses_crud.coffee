create = ( course ) ->
  Meteor.call 'create/course', course, ( error ) ->
    if error
      App.utils.notify.error error.reason
    else
      App.utils.notify.success 'Course Created!'
      FlowRouter.go '/courses'

update = ( course ) ->
  Meteor.call 'update/course', course, ( error ) ->
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