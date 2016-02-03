Meteor.publishComposite('courses', {
  find: function() {
    if (this.userId) {
      if (!Roles.userIsInRole(this.userId, 'admin')) {
        return;
      }
      return App.Collections.Courses.find({
        owner: this.userId
      });
    }
  },
  children: [
    {
      find: function(course) {
        return App.Collections.Classes.find({
          courseId: course._id
        });
      }
    }
  ]
});

Meteor.publishComposite('course', {
  find: function(_id) {
    if (this.userId) {
      return App.Collections.Courses.find({
        owner: this.userId
      });
    }
  },
  children: [
    {
      find: function(course) {
        return App.Collections.Classes.find({
          courseId: course._id
        });
      }
    }
  ]
});
