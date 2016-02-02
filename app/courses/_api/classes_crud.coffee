create = ( { title, description, duration, price, courseId } ) ->
  Meteor.call 'create/class', { title, description, duration, price, courseId }, ( error ) ->
    if error
      App.utils.notify.error error.reason

update = ( { _id, title, description, duration, price, courseId } ) ->
  Meteor.call 'update/class', { _id, title, description, duration, price, courseId }, ( error ) ->
    if error
      App.utils.notify.error error.reason

remove = ( _id ) ->
  Meteor.call 'remove/class', _id, ( error ) ->
    if error
      App.utils.notify.error error.reason

App.api.classes = {
  create, update, remove
}