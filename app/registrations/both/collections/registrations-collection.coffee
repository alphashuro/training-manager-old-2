App.Collections.Registrations = @Registrations = new Mongo.Collection 'registrations'

Registrations.allow
  insert: -> false
  update: -> false
  remove: -> false
Registrations.deny
  insert: -> true
  update: -> true
  remove: -> true