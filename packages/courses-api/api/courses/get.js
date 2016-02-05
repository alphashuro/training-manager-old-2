import Courses from '../../collections/courses.js';

function all() {
  Meteor.subscribe('courses');
  return Courses.find().fetch();
}

function one(_id) {
  Meteor.subscribe('course', _id);
  return Courses.findOne(_id);
}

const get = { one, all };

export default get;
export { all, one };
