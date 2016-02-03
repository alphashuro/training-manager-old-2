var signup;

signup = function(arg) {
  var email, org, password;
  email = arg.email, password = arg.password, org = arg.org;
  if (!org) {
    App.utils.notify.error('Organization name not specified');
    return;
  }
  if (!email) {
    App.utils.notify.error('Email not specified');
    return;
  }
  if (!password) {
    App.utils.notify.error('Passowrd not specified');
    return;
  }
  return Meteor.call('create/user', {
    email: email,
    password: password,
    org: org
  }, function(error) {
    if (error) {
      App.utils.notify.error(error.reason);
    }
    return App.api.login(email, password);
  });
};

App.api.signup = signup;
