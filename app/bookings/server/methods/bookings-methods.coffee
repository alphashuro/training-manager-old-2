Meteor.methods
  'create/booking': ({ courseId, facilitatorId }) ->
    check courseId, String
    check facilitatorId, String

    regId = Bookings.insert {
      courseId,
      facilitatorId
      owner: Meteor.userId()
      studentIds: []
    }

    course = Courses.findOne( courseId )
    sessions = course.classes().fetch().map (c) =>
      'class': c
      bookingId: regId
      owner: Meteor.userId()

    for session in sessions
      Sessions.insert session

    return regId

  'addStudent/booking': ({ _id, studentId }) ->
    check studentId, String

    student = Students.findOne studentId
    unless student then throw new Meteor.error 'student-doesnt-exist', 'That student does not exist in the database'

    Bookings.update _id, {
      $addToSet: studentIds: studentId
    }

  'removeStudent/booking': ({ _id, studentId }) ->
    check studentId, String

    Bookings.update _id, {
      $pull : studentIds : studentId
    }

  'remove/booking': ( _id ) ->
    check _id, String

    Bookings.remove _id
