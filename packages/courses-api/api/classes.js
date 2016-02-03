var create, remove, update;

create = function(arg) {
  var courseId, description, duration, price, title;
  title = arg.title, description = arg.description, duration = arg.duration, price = arg.price, courseId = arg.courseId;
  return Meteor.call('create/class', {
    title: title,
    description: description,
    duration: duration,
    price: price,
    courseId: courseId
  }, function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    }
  });
};

update = function(arg) {
  var _id, courseId, description, duration, price, title;
  _id = arg._id, title = arg.title, description = arg.description, duration = arg.duration, price = arg.price, courseId = arg.courseId;
  return Meteor.call('update/class', {
    _id: _id,
    title: title,
    description: description,
    duration: duration,
    price: price,
    courseId: courseId
  }, function(error) {
    if (error) {
      return App.utils.notify.error(error.reason);
    }
  });
};

remove = function(_id) {
  return Meteor.call('remove/class', _id, function(error) {
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
