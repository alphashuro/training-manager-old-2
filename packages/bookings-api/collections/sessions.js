import Bookings from './bookings.js';
import moment from 'moment';

const Sessions = new Mongo.Collection('sessions');

Sessions.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Sessions.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Sessions.helpers({
  booking: () => Bookings.findOne(this.bookingId),
  calendar: () => moment(this.date).calendar(),
  endTime: () =>
    moment(this.date).add(this.class.duration, 'hours').format('LT'),
});

export default Sessions;
