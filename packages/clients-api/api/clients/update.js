function update(client, cb) {
  Meteor.call('update/client', client, cb);
}

export default update;
