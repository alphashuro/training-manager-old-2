var login;

login = function(email, password) {
  if (!email) {
    App.utils.notify.error('Email not specified');
    return;
  }
  if (!password) {
    App.utils.notify.error('Password not specified');
    return;
  }
  return Meteor.loginWithPassword(email, password, (function(_this) {
    return function(error) {
      if (error) {
        return App.utils.notify.error(error.reason);
      } else {
        return FlowRouter.go('/dashboard');
      }
    };
  })(this));
};

App.api.login = login;
