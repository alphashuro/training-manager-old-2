function remove(_id, cb) {
  Meteor.call('remove/client', _id, cb);
}

export default remove;
