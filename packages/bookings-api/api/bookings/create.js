/**
 * (Async) Creates a new booking
 * @param  {String}   options.courseId      _id of the course being booked
 * @param  {String}   options.facilitatorId _id of the facilitator being booked
 * @param  {Function} cb                    Called with null on success,
 *                                          single error argument on failure
 * @return {String}   bookingId             returns new booking's _id
 */
function create( { courseId, facilitatorId }, cb ) {
  Meteor.call( 'create/booking', { courseId, facilitatorId }, cb );
}

export default create;
