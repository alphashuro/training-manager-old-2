Meteor.methods({
  'create/class': function(arg) {
    var courseId, description, duration, price, title;
    title = arg.title, description = arg.description, duration = arg.duration, price = arg.price, courseId = arg.courseId;
    check(title, String);
    check(description, String);
    check(duration, Number);
    check(price, Number);
    check(courseId, String);
    return App.Collections.Classes.insert({
      title: title,
      description: description,
      duration: duration,
      price: price,
      courseId: courseId
    });
  },
  'update/class': function(arg) {
    var _id, description, duration, price, title;
    _id = arg._id, title = arg.title, description = arg.description, duration = arg.duration, price = arg.price;
    check(_id, String);
    check(title, String);
    check(description, String);
    check(duration, Number);
    check(price, Number);
    return App.Collections.Classes.update(_id, {
      $set: {
        title: title,
        description: description,
        duration: duration,
        price: price
      }
    });
  },
  'remove/class': function(id) {
    check(id, String);
    return App.Collections.Classes.remove(id);
  }
});
