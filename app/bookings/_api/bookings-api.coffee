create = ( booking ) ->
  Meteor.call(
    'create/booking',
    booking,
    ( error, bookingId ) ->
      if error
        App.utils.notify.error( error.reason )
      else
        App.utils.notify.success( 'Booking created' )
        FlowRouter.go( "/bookings/detail/#{ bookingId }" )
  )

update = ( booking ) ->
  console.log( booking )

remove = ( _id ) ->
  Meteor.call(
    'remove/booking',
    _id,
    ( error ) ->
      App.utils.errorCb( error, 'Booking Removed' )
  )

addStudent = ( { _id, studentId } ) ->
  Meteor.call(
    'addStudent/booking',
    { _id, studentId } ,
    ( error ) ->
      App.utils.errorCb( error )
  )

removeStudent = ( { _id, studentId } ) ->
  Meteor.call(
    'removeStudent/booking',
    { _id, studentId } ,
    ( error ) ->
      App.utils.errorCb( error )
  )

App.api.bookings = {
  create, update, remove, addStudent, removeStudent
}
