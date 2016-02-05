/**
 * Remove a booking
 * @param  {String}   _id _id of the booking to be removed
 * @param  {Function} cb  Called with no arguments on success,
 *                        single error argument on failure
 * @return  none
 */
function remove(_id, cb) {
  Meteor.call('remove/booking', _id, cb);
}

export default remove;
