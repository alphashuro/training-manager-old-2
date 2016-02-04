import Clients
  from 'meteor/training-manager:clients-api/collections/clients.js';

Meteor.methods({
  'create/client'({ name, phone, email }) {
    check(name, String);
    check(phone, String);
    check(email, String);

    return Clients.insert({
      name,
      phone,
      email,
      owner: Meteor.userId(),
    });
  },
  'update/client'({ _id, name, phone, email }) {
    check(_id, String);
    check(name, String);
    check(phone, String);
    check(email, String);

    return Clients.update(_id, {
      $set: {
        name: name,
        phone: phone,
        email: email,
      },
    });
  },
  'remove/client'(_id) {
    check(_id, String);

    return Clients.remove(_id);
  },
});
