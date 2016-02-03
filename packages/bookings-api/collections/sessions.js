import Bookings from './bookings.js';
import moment from 'moment';

const Sessions = new Mongo.Collection('sessions');

Sessions.allow({
  insert: function() {
    return false;
  },
  update: function() {
    return false;
  },
  remove: function() {
    return false;
  }
});

Sessions.deny({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});

Sessions.helpers({
  booking: function() {
    return Bookings.findOne(this.bookingId);
  },
  calendar: function() {
    return moment(this.date).calendar();
  },
  endTime: function() {
    return moment(this.date).add(this["class"].duration, 'hours').format('LT');
  }
});

export default Sessions;
