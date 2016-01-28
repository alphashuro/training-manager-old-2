App.Collections.Clients = @Clients = new Mongo.Collection 'clients'

Clients.allow
  insert: -> false
  update: -> false
  remove: -> false
Clients.deny
  insert: -> true
  update: -> true
  remove: -> true

Clients.helpers
  students: ->
    Students.find clientId: @_id