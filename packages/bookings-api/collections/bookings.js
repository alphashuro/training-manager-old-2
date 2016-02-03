const Bookings = new Mongo.Collection('bookings');
import Sessions from './sessions.js';

Bookings.allow({
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

Bookings.deny({
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

Bookings.helpers({
  facilitator: function() {
    return Facilitators.findOne(this.facilitatorId);
  },
  course: function() {
    return Courses.findOne(this.courseId);
  },
  students: function() {
    return Students.find({
      _id: {
        $in: this.studentIds
      }
    });
  },
  nextSession: function() {
    var session;
    return session = Sessions.findOne({
      bookingId: this._id,
      date: {
        $gt: new Date()
      }
    }, {
      $sort: {
        date: 1
      }
    });
  },
  sessions: function() {
    return Sessions.find({
      bookingId: this._id
    });
  }
});

export default Bookings;
