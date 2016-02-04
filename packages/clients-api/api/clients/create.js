function create(client, cb) {
  Meteor.call('create/client', client, cb);
}

export default create;
