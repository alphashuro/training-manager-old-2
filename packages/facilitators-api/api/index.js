var create, remove, update;

create = function(facilitator) {
  return Meteor.call('create/facilitator', facilitator, function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    } else {
      App.utils.notify.success('Facilitator Created!');
      return FlowRouter.go('/facilitators');
    }
  });
};

update = function(facilitator) {
  return Meteor.call('update/facilitator', facilitator, function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    }
  });
};

remove = function(_id) {
  return Meteor.call('remove/facilitator', _id, function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    } else {
      return App.utils.notify.success('Facilitator removed');
    }
  });
};

App.api.facilitators = {
  create,
  update,
  remove
};
