const Courses = new Mongo.Collection('courses');
import Classes from './classes.js';

Courses.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Courses.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Courses.helpers({
  // Todo: calculate duration
  duration: () => 0,
  // Todo: calculate price
  price: () => 0,
  classes: () => Classes.find({
    courseId: this._id,
  }),
});

export default Courses;
