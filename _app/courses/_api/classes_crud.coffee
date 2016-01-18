create = ( { title, description, duration, price, courseId } ) ->
  check title, String
  check description, String
  check duration, Number
  check price, Number
  check courseId, String

  Meteor.call 'create/class', { title, description, duration, price, courseId }, ( error ) ->
    if error
      App.utils.notify.error error.reason

update = ( { _id, title, description, duration, price, courseId } ) ->
  check _id, String
  check title, String
  check description, String
  check duration, Number
  check price, Number
  check courseId, String

  Meteor.call 'update/class', { _id, title, description, duration, price, courseId }, ( error ) ->
    if error
      App.utils.notify.error error.reason

remove = ( _id ) ->
  check _id, String

  Meteor.call 'remove/class', _id, ( error ) ->
    if error
      App.utils.notify.error error.reason

App.api.classes = {
  create, update, remove
}