/**
 * Removes a given student from a booking
 * @param  {[type]}   options._id       _id of booking to remove student from
 * @param  {[type]}   options.studentId _id of the student being removed
 * @param  {Function} cb                Called with null on success,
 *                                      single error argument on failure
 * @return none
 */
function remove( { _id, studentId }, cb ) {
  Meteor.call('removeStudent/booking', {
    _id,
    studentId,
  }, cb );
}

export default remove;
