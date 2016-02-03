Meteor.publishComposite('bookings', {
  find: function() {
    if (this.userId) {
      if (!Roles.userIsInRole(this.userId, 'admin')) {
        return;
      }
      return Bookings.find({
        owner: this.userId
      });
    }
  },
  children: [
    {
      find: function(booking) {
        return Facilitators.find(booking.facilitatorId);
      }
    }, {
      find: function(booking) {
        return Courses.find(booking.courseId);
      }
    }, {
      find: function(booking) {
        if (booking.studentIds) {
          return Students.find({
            _id: {
              $in: booking.studentIds
            }
          });
        }
      },
      children: [
        {
          find: function(student) {
            return Clients.find(student.clientId);
          }
        }
      ]
    }, {
      find: function(booking) {
        return Sessions.find({
          bookingId: booking._id
        });
      }
    }
  ]
});

Meteor.publishComposite('booking', {
  find: function(_id) {
    if (this.userId) {
      if (!Roles.userIsInRole(this.userId, 'admin')) {
        return;
      }
      return Bookings.find({
        _id: _id,
        owner: this.userId
      });
    }
  },
  children: [
    {
      find: function(booking) {
        return Facilitators.find(booking.facilitatorId);
      }
    }, {
      find: function(booking) {
        return Courses.find(booking.courseId);
      }
    }, {
      find: function(booking) {
        return Students.find({
          _id: {
            $in: booking.studentIds
          }
        });
      },
      children: [
        {
          find: function(student) {
            return Clients.find(student.clientId);
          }
        }
      ]
    }, {
      find: function(booking) {
        return Sessions.find({
          bookingId: booking._id
        });
      }
    }
  ]
});
