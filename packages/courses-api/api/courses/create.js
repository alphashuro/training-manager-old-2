function create(course, cb) {
  Meteor.call('create/course', course, cb);
}

export default create;
