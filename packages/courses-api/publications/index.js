import Courses
  from 'meteor/training-manager:courses-api/collections/courses.js';
import Classes
  from 'meteor/training-manager:courses-api/collections/classes.js';

Meteor.publishComposite('courses', {
  find() {
    if (this.userId) {
      if (!Roles.userIsInRole(this.userId, 'admin')) {
        return null;
      }
      return Courses.find({
        owner: this.userId,
      });
    }
  },
  children: [
    {
      find(course) {
        return Classes.find({
          courseId: course._id,
        });
      },
    },
  ],
});

Meteor.publishComposite('course', {
  find(_id) {
    if (this.userId) {
      return Courses.find({
        _id,
        owner: this.userId,
      });
    }
  },
  children: [
    {
      find(course) {
        return Classes.find({
          courseId: course._id,
        });
      },
    },
  ],
});
