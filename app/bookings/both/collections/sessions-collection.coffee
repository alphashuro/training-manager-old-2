App.Collections.Sessions = @Sessions = new Mongo.Collection 'sessions'

Sessions.allow
  insert: -> false
  update: -> false
  remove: -> false
Sessions.deny
  insert: -> true
  update: -> true
  remove: -> true

Sessions.helpers
  booking: -> Bookings.findOne @bookingId
  calendar: -> moment( @date ).calendar()
  endTime: -> moment( @date ).add( @class.duration, 'hours' ).format('LT')
