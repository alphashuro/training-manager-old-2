App.Collections.Classes = new Mongo.Collection 'classes'

App.Collections.Classes.allow
  insert: -> false
  update: -> false
  remove: -> false

App.Collections.Classes.deny
  insert: -> true
  update: -> true
  remove: -> true