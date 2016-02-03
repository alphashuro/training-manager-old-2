var create, remove, update;

create = function(course) {
  return Meteor.call('create/course', course, function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    } else {
      App.utils.notify.success('Course Created!');
      return FlowRouter.go('/courses');
    }
  });
};

update = function(course) {
  return Meteor.call('update/course', course, function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    }
  });
};

remove = function(_id) {
  return Meteor.call('remove/course', _id, function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    } else {
      return App.utils.notify.success('Course removed');
    }
  });
};

App.api.courses = {
  create: create,
  update: update,
  remove: remove
};
