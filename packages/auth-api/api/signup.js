/**
 * (Async) used to sign a new user up to the Training-manager app
 * @param  {string}   options.email    User's email
 * @param  {string}   options.org      User's organization
 * @param  {string}   options.password User's password
 * @param  {Function} cb               Called with null on success,
 *                                     with single error argument on failure
 * @return none
 */
function signup( { email, org, password }, cb ) {
  if (!org) {
    cb( new Meteor.Error( 'org-missing', 'Organization name not specified' ) );
    return;
  }
  if (!email) {
    cb( new Meteor.Error( 'email-missing', 'Email not specified' ) );
    return;
  }
  if (!password) {
    cb( new Meteor.Error( 'Password not specified' ) );
    return;
  }

  Meteor.call('create/user', {
    email,
    password,
    org,
  }, cb );
}

export default signup;
