function remove(_id, cb) {
  Meteor.call('remove/course', _id, cb);
}

export default remove;
