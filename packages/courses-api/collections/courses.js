const Courses = new Mongo.Collection('courses');
import Classes from './classes.js'

Courses.allow({
  insert: function() {
    return false;
  },
  update: function() {
    return false;
  },
  remove: function() {
    return false;
  }
});

Courses.deny({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});

Courses.helpers({
  duration: function() {
    return 0;
  },
  price: function() {
    return 0;
  },
  classes: function() {
    return Classes.find({
      courseId: this._id
    });
  }
});

export default Courses;
