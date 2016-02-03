Meteor.methods({
  'create/user': function(arg) {
    var email, org, orgExists, password, profile, userId;
    email = arg.email, password = arg.password, org = arg.org;
    check(email, String);
    check(password, String);
    check(org, String);
    profile = {
      org: org
    };
    orgExists = Meteor.users.findOne({
      "profile.org": org
    });
    if (orgExists) {
      throw new Meteor.error('org-exists', org + " already exists.");
    }
    userId = Accounts.createUser({
      email: email,
      password: password,
      profile: profile
    });
    Roles.addUsersToRoles(userId, 'admin');
    return userId;
  }
});
