function remove(_id, cb) {
  Meteor.call('remove/class', _id, cb);
}

export default remove;
