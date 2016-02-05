import Bookings from '../../collections/bookings.js';

function all() {
  Meteor.subscribe('bookings');
  return Bookings.find().fetch();
}

function one(_id) {
  Meteor.subscribe('booking', _id);
  return Bookings.findOne(_id);
}

const get = { one, all };

export default get;
export { all, one };
