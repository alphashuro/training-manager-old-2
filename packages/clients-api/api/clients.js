let create, remove, update;

create = function(client) {
  return Meteor.call('create/client', client, function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    } else {
      App.utils.notify.success('Client Created!');
      return FlowRouter.go('/clients');
    }
  });
};

update = function(client) {
  return Meteor.call('update/client', client, function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    }
  });
};

remove = function(_id) {
  return Meteor.call('remove/client', _id, function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    } else {
      return App.utils.notify.success('Clients removed');
    }
  });
};

export {
  create,
  update,
  remove
};
