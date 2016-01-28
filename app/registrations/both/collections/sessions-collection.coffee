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