/**
 * (Async) Used to log a user in to the training manager app
 * @param  {String}   email    The user's email address
 * @param  {String}   password The user's password
 * @param  {Function} cb       Called with null on success,
 *                             with single error argument on failure
 * @return none
 */
function login(email, password, cb) {
  if ( !email ) {
    cb( new Meteor.Error( 'email-missing', 'Email not specified' ) );
    return;
  }

  if ( !password ) {
    cb( new Meteor.Error( 'Password not specified' ) );
    return;
  }

  Meteor.loginWithPassword( email, password, cb );
}

export default login;
