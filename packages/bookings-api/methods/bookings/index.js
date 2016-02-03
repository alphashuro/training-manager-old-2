Meteor.methods({
  'create/booking': function(arg) {
    var course, courseId, facilitatorId, i, len, regId, session, sessions;
    courseId = arg.courseId, facilitatorId = arg.facilitatorId;
    check(courseId, String);
    check(facilitatorId, String);
    regId = Bookings.insert({
      courseId: courseId,
      facilitatorId: facilitatorId,
      owner: Meteor.userId(),
      studentIds: []
    });
    course = Courses.findOne(courseId);
    sessions = course.classes().fetch().map(function(c) {
      return {
        'class': c,
        bookingId: regId,
        owner: Meteor.userId()
      };
    });
    for (i = 0, len = sessions.length; i < len; i++) {
      session = sessions[i];
      Sessions.insert(session);
    }
    return regId;
  },
  'addStudent/booking': function(arg) {
    var _id, student, studentId;
    _id = arg._id, studentId = arg.studentId;
    check(studentId, String);
    student = Students.findOne(studentId);
    if (!student) {
      throw new Meteor.error('student-doesnt-exist', 'That student does not exist in the database');
    }
    return Bookings.update(_id, {
      $addToSet: {
        studentIds: studentId
      }
    });
  },
  'removeStudent/booking': function(arg) {
    var _id, studentId;
    _id = arg._id, studentId = arg.studentId;
    check(studentId, String);
    return Bookings.update(_id, {
      $pull: {
        studentIds: studentId
      }
    });
  },
  'remove/booking': function(_id) {
    check(_id, String);
    return Bookings.remove(_id);
  }
});
