Meteor.methods({
  'create/course': function(arg) {
    var description, maxStudents, title;
    title = arg.title, description = arg.description, maxStudents = arg.maxStudents;
    check(title, String);
    check(description, String);
    check(maxStudents, Number);
    return App.Collections.Courses.insert({
      title: title,
      description: description,
      maxStudents: maxStudents,
      owner: Meteor.userId()
    });
  },
  'update/course': function(arg) {
    var _id, description, maxStudents, title;
    _id = arg._id, title = arg.title, description = arg.description, maxStudents = arg.maxStudents;
    check(_id, String);
    check(title, String);
    check(description, String);
    check(maxStudents, Number);
    return App.Collections.Courses.update(_id, {
      $set: {
        title: title,
        description: description,
        maxStudents: maxStudents
      }
    });
  },
  'remove/course': function(_id) {
    check(_id, String);
    return App.Collections.Courses.remove(_id);
  }
});
