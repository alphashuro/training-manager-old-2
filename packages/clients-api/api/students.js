var create, remove, update;

create = function(student) {
  return Meteor.call('create/student', student, function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    }
  });
};

update = function(student) {
  return Meteor.call('update/student', student, function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    }
  });
};

remove = function(_id) {
  return Meteor.call('remove/student', _id, function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    }
  });
};

export {
  create,
  update,
  remove
};
