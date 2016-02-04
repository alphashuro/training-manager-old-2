import Sessions
  from 'meteor/training-manager:bookings-api/collections/sessions.js';

Meteor.methods({
  'update/session'( _id, { date } ) {
    return Sessions.update(_id, {
      $set: { date },
    });
  },
});
