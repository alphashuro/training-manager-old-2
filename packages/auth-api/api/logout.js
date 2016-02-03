var logout;

logout = function() {
  return Meteor.logout(function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    } else {
      App.utils.notify.success('Logged out.');
      return FlowRouter.go('/login');
    }
  });
};

App.api.logout = logout;
