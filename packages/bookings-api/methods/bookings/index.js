import Bookings
  from 'meteor/training-manager:bookings-api/collections/bookings.js';
import Sessions
  from 'meteor/training-manager:bookings-api/collections/sessions.js';

import { Collections } from 'meteor/training-manager:lib';

const { Courses, Students } = Collections;

Meteor.methods({
  'create/booking'({ courseId, facilitatorId }) {
    check(courseId, String);
    check(facilitatorId, String);

    let regId = Bookings.insert({
      courseId,
      facilitatorId,
      owner: Meteor.userId(),
      studentIds: [],
    });

    let course = Courses.findOne(courseId);
    let sessions = course.classes().fetch().map( c => {
      return {
        class: c,
        bookingId: regId,
        owner: Meteor.userId(),
      };
    });

    sessions.forEach( session => Sessions.insert(session) );

    return regId;
  },

  'addStudent/booking'({ _id, studentId }) {
    check(studentId, String);

    let student = Students.findOne(studentId);
    if (!student) {
      throw new Meteor.Error(
        'student-not-found',
        'That student was not found in the database');
    }
    return Bookings.update( _id, {
      $addToSet: { studentIds: studentId },
    });
  },

  'removeStudent/booking'({ _id, studentId}) {
    check(studentId, String);

    return Bookings.update( _id, {
      $pull: { studentIds: studentId },
    });
  },

  'remove/booking'( _id ) {
    check(_id, String);

    return Bookings.remove(_id);
  },
});
