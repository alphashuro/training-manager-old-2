/**
 * Updates a given session's properties
 * @param  {String}   options.sessionId the session to be updated
 * @param  {Date}     options.date      New date for the session
 * @param  {Function} cb                Called with null on success,
 *                                      single error argument on failure
 * @return none
 */
function update({ sessionId, date }, cb) {
  Meteor.call('update/session', sessionId, {
    date,
  }, cb );
}

export default update;
