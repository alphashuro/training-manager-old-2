App.Collections.Orgs = new Mongo.Collection 'orgs'

App.Collections.Orgs.deny
  insert: -> true
  update: -> true
  remove: -> true

App.Collections.Orgs.allow
  insert: -> false
  update: -> false
  remove: -> false