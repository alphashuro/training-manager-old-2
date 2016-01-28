App.Collections.Students = @Students = new Mongo.Collection 'students'

Students.allow
  insert: -> false
  update: -> false
  remove: -> false
Students.deny
  insert: -> true
  update: -> true
  remove: -> true