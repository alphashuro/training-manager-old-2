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
  registration: -> Registrations.findOne @registrationId
  calendar: -> moment( @date ).calendar()
  endTime: -> moment( @date ).add( @class.duration, 'hours' ).format('LT')