import Sessions from './sessions.js';
const Bookings = new Mongo.Collection('bookings');

Bookings.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Bookings.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

import Facilitators
  from 'meteor/training-manager:facilitators-api/collections/facilitators.js';
import Courses
  from 'meteor/training-manager:courses-api/collections/courses.js';
import Students
  from 'meteor/training-manager:students-api/collections/students.js';

Bookings.helpers({
  facilitator: () => Facilitators.findOne( this.facilitatorId ),
  course: () => Courses.findOne( this.courseId ),
  students: () => Students.find({ _id: { $in: this.studentIds }}),
  nextSession: () => Sessions.findOne(
    { bookingId: this._id, date: { $gt: new Date() } },
    { $sort: { date: 1 } } ),
  sessions: () => Sessions.find({ bookingId: this._id }),

});

export default Bookings;
