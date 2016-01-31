Meteor.methods
  'create/registration': ({ courseId, facilitatorId }) ->
    check courseId, String
    check facilitatorId, String

    regId = Registrations.insert {
      courseId,
      facilitatorId
      owner: Meteor.userId()
      studentIds: []
    }

    course = Courses.findOne( courseId )
    sessions = course.classes().fetch().map (c) => 
      'class': c
      registrationId: regId
      owner: Meteor.userId()

    for session in sessions
      Sessions.insert session

    return regId

  'addStudent/registration': ({ _id, studentId }) ->
    check studentId, String

    student = Students.findOne studentId
    unless student then throw new Meteor.error 'student-doesnt-exist', 'That student does not exist in the database'

    Registrations.update _id, {
      $addToSet: studentIds: studentId
    }

  'removeStudent/registration': ({ _id, studentId }) ->
    check studentId, String

    Registrations.update _id, {
      $pull : studentIds : studentId
    }

  'remove/registration': ( _id ) ->
    check _id, String

    Registrations.remove _id