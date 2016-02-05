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
  duration() {
    let classes = this.classes().fetch();
    let total = classes.reduce((prev, c) => prev + c.duration, 0);
    return total;
  },
  price() {
    let classes = this.classes().fetch();
    let total = classes.reduce((prev, c) => prev + c.price, 0);
    return total;
  },
  classes() {
    return Classes.find({
      courseId: this._id,
    });
  },
});

export default Courses;
