App.Collections.Courses = new Mongo.Collection 'courses'

App.Collections.Courses.allow
  insert: -> false
  update: -> false
  remove: -> false

App.Collections.Courses.deny
  insert: -> true
  update: -> true
  remove: -> true

App.Collections.Courses.helpers
  duration: -> 0
  price: -> 0