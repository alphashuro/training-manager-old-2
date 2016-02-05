import Students from '../../collections/students.js';

function all() {
  Meteor.subscribe('students');
  return Students.find().fetch();
}

function one(_id) {
  Meteor.subscribe('student', _id);
  return Students.findOne(_id);
}

const get = { one, all };

export default get;
export { all, one };
