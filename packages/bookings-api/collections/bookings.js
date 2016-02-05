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

import { Collections } from 'meteor/training-manager:lib';

const { Courses, Facilitators, Students } = Collections;

Bookings.helpers({
  facilitator() {
    return Facilitators.findOne( this.facilitatorId );
  },
  course() {
    return Courses.findOne( this.courseId );
  },
  students() {
    return Students.find({ _id: { $in: this.studentIds }});
  },
  nextSession() {
    return Sessions.findOne(
      { bookingId: this._id, date: { $gt: new Date() } },
      { $sort: { date: 1 } }
    );
  },
  sessions() {
    return Sessions.find({ bookingId: this._id });
  },
});

export default Bookings;
