function remove(_id, cb) {
  return Meteor.call('remove/facilitator', _id, cb);
}

export default remove;
