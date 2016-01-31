create = ( booking ) ->
  Meteor.call 'create/registration', booking, ( error, bookingId ) ->
    if error
      App.utils.notify.error error.reason
    else
      App.utils.notify.success 'Booking created!'
      FlowRouter.go "/registrations/detail/#{ bookingId }"

update = ( booking ) ->
  console.log booking

remove = ( _id ) ->
  console.log _id

App.api.bookings = {
  create, update, remove
}