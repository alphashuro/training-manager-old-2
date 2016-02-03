App.Collections.Bookings = @Bookings = new Mongo.Collection 'bookings'

Bookings.allow
  insert: -> false
  update: -> false
  remove: -> false
Bookings.deny
  insert: -> true
  update: -> true
  remove: -> true

Bookings.helpers
  facilitator: -> Facilitators.findOne @facilitatorId
  course: -> Courses.findOne @courseId
  students: -> Students.find { _id: $in: @studentIds }
  nextSession: ->
    session = Sessions.findOne { bookingId: @_id, date: $gt: new Date() } , $sort: date: 1
  sessions: -> Sessions.find bookingId: @_id
