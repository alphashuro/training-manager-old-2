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
  nextSession: ->
    session = Sessions.findOne { registrationId: @_id, date: $gt: new Date() } , $sort: date: 1