App.Collections.Registrations = @Registrations = new Mongo.Collection 'registrations'

Registrations.allow
  insert: -> false
  update: -> false
  remove: -> false
Registrations.deny
  insert: -> true
  update: -> true
  remove: -> true

Registrations.helpers
  facilitator: -> Facilitators.findOne @facilitatorId
  course: -> Courses.findOne @courseId