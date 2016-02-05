import Bookings
  from 'meteor/training-manager:bookings-api/collections/bookings.js';
import Sessions
  from 'meteor/training-manager:bookings-api/collections/sessions.js';
import Facilitators
  from 'meteor/training-manager:facilitators-api/collections/facilitators.js';
import Courses
  from 'meteor/training-manager:courses-api/collections/courses.js';
import Students
  from 'meteor/training-manager:clients-api/collections/students.js';
import Clients
  from 'meteor/training-manager:clients-api/collections/clients.js';

Meteor.publishComposite('bookings', {
  find() {
    if (this.userId) {
      if (!Roles.userIsInRole( this.userId, 'admin' )) {
        return null;
      }
      return Bookings.find({
        owner: this.userId,
      });
    }
  },
  children: [
    {
      find: ( booking ) => Facilitators.find( booking.facilitatorId ),
    },
    {
      find: ( booking ) => Courses.find( booking.courseId ),
    },
    {
      find( booking ) {
        if ( booking.studentIds ) {
          return Students.find({ _id: { $in: booking.studentIds } });
        }
      },
      children: [
        {
          find: ( student ) => Clients.find(student.clientId),
        },
      ],
    },
    {
      find: ( booking ) => Sessions.find({ bookingId: booking._id }),
    },
  ],
});

Meteor.publishComposite('booking', {
  find( _id ) {
    if (this.userId) {
      if (!Roles.userIsInRole(this.userId, 'admin')) {
        return null;
      }
      return Bookings.find({
        _id,
        owner: this.userId,
      });
    }
  },
  children: [
    { find: (booking) => Facilitators.find(booking.facilitatorId) },
    { find: (booking) => Courses.find(booking.courseId) },
    { find: (booking) => Students.find({ _id: { $in: booking.studentIds }}),
      children: [
        { find: (student) => Clients.find(student.clientId) },
      ],
    },
    { find: (booking) => Sessions.find({ bookingId: booking._id }) },
  ],
});
