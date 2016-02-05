Meteor.methods({
  /**
   * Creates a user if the organization is not already registered
   * @param  {string} options.email    User's email
   * @param  {string} options.password User's password
   * @param  {strign} options.org      User's organization
   * @return {string} userId           Returns newly created user's _id.
   */
  'create/user': function createUserMethod({ email, password, org }) {
    check(email, String);
    check(password, String);
    check(org, String);

    let profile = {
      org,
    };

    let orgExists = Meteor.users.findOne({
      'profile.org': org,
    });

    if (orgExists) {
      throw new Meteor.Error('org-exists', org + ' already exists.');
    }

    let userId = Accounts.createUser({
      email,
      password,
      profile,

    });

    Roles.addUsersToRoles(userId, 'admin');

    return userId;
  },
});
