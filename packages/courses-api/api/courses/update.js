function update(course, cb) {
  Meteor.call('update/course', course, cb);
}

export default update;
