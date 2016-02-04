/**
 * Adds a student to a booking
 * @param {String}   options._id       _id of the booking to add the student to
 * @param {String}   options.studentId _id of the student being added
 * @param {Function} cb                Called with null on success,
 *                                     single error argument on failure
 */
function add( { _id, studentId }, cb ) {
  Meteor.call('addStudent/booking', {
    _id,
    studentId,
  }, cb);
}

export default add;
